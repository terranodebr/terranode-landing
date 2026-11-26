// Browser behaviour of the checklist, shared by the A and B pages (/checklist-operacao/
// and /checklist-operacao/b/). Both pages render the same screens with their own markup and
// styles; this module only reads data-ck-* attributes, never a page's classes, so the A/B
// test compares the design and nothing else.
//
// Contract with the markup (required unless marked optional):
//   [data-ck-tela="inicio|<area id>|revisao|resultado"]  the screens
//   [data-ck-palco]          wraps the area and review screens
//   [data-ck-form]           the form holding every radio (name = chave(area, i))
//   [data-ck-foco]           inside a screen: what gets focus when it opens
//   [data-ck-progresso-rotulo], [data-ck-progresso-conta], [data-ck-barra="<area id>"]
//   [data-ck-pergunta="<chave>"] with a [data-ck-falta] message inside
//   [data-ck-resumo="<chave>"] on the review screen
//   [data-ck-area-resultado="<area id>"] with optional [data-ck-preenchimento] (width),
//     [data-ck-situacao] (text) and [data-ck-bloco] (one per point, gets .is-cheio)
//   [data-ck-radar-forma], [data-ck-radar-ponto="<i>"]   optional radar
//   [data-ck-nivel-nome|nivel-texto|forte-nome|forte-texto|fraca-nome|fraca-texto|acao|empate]
//   [data-ck-destaques]      optional: wraps the strongest/weakest cards, hidden in a tie
//   buttons: [data-ck-comecar] (first child a text node), [data-ck-recomecar],
//     [data-ck-avancar], [data-ck-voltar], [data-ck-editar="<area id>"],
//     [data-ck-ver-resultado], [data-ck-refazer]
//   forms: [data-ck-enviar="resultado|desafio"] with [data-ck-erro] and [data-ck-status]
//   [data-ck-video]          optional hero video, paused under reduced motion
import { AREAS, LINKS, NIVEIS, RESPOSTAS, TOTAL_AFIRMACOES, calcularResultado, chave, situacao, textoForte, textoFraca, type Respostas, type Valor } from "./checklist";

export type Variante = "a" | "b";

/** Radar geometry, shared with the page that draws the axes on the server. */
export const RADAR = { cx: 150, cy: 132, r: 92 };

export function iniciarChecklist(variante: Variante) {
  // Each variant keeps its own progress: someone who sees both never resumes one page
  // from a screen of the other. A keeps the key it shipped with.
  const CHAVE_LOCAL = variante === "a" ? "tn-checklist-operacao-v1" : `tn-checklist-operacao-${variante}-v1`;
  const TELAS = ["inicio", ...AREAS.map((a) => a.id), "revisao", "resultado"];

  const $ = <T extends Element = HTMLElement>(sel: string, el: ParentNode = document) => el.querySelector<T>(sel)!;
  const $opt = <T extends Element = HTMLElement>(sel: string, el: ParentNode = document) => el.querySelector<T>(sel);
  const $$ = <T extends Element = HTMLElement>(sel: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(sel));

  const form = $<HTMLFormElement>("[data-ck-form]");
  const palco = $("[data-ck-palco]");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Every event says which variant sent it. register() also tags the events Base.astro
  // sends on its own, like "CTA Clicked".
  const mp = (window as any).mixpanel;
  if (mp && typeof mp.register === "function") mp.register({ checklist_variante: variante });
  function track(evento: string, props: Record<string, unknown> = {}) {
    if (mp && typeof mp.track === "function") mp.track(evento, { ...props, variante });
  }

  // Saved progress. Storage can be blocked (private mode, cleared site data), so every
  // access is wrapped and the page works without it.
  interface Salvo { respostas: Respostas; tela: string }
  function ler(): Salvo | null {
    try {
      const s = JSON.parse(localStorage.getItem(CHAVE_LOCAL) || "null");
      return s && typeof s.respostas === "object" && TELAS.includes(s.tela) ? s : null;
    } catch { return null; }
  }
  function salvar(tela: string) {
    try { localStorage.setItem(CHAVE_LOCAL, JSON.stringify({ respostas: respostas(), tela })); } catch {}
  }
  function apagar() {
    try { localStorage.removeItem(CHAVE_LOCAL); } catch {}
  }

  function respostas(): Respostas {
    const r: Respostas = {};
    for (const input of $$<HTMLInputElement>("input[type=radio]:checked", form)) r[input.name] = Number(input.value) as Valor;
    return r;
  }

  let atual = "inicio";

  function mostrar(tela: string, { focar = true } = {}) {
    atual = tela;
    const naoInicio = tela !== "inicio";
    $('[data-ck-tela="inicio"]').hidden = naoInicio;
    palco.hidden = !naoInicio || tela === "resultado";
    for (const el of $$("[data-ck-tela]")) {
      const t = el.dataset.ckTela!;
      if (t !== "inicio") el.hidden = t !== tela;
    }
    if (tela === "inicio") prepararInicio();
    if (tela === "revisao") preencherRevisao();
    if (tela === "resultado") preencherResultado();
    atualizarProgresso();
    if (tela !== "inicio") salvar(tela);

    if (focar) {
      window.scrollTo({ top: 0, behavior: reduzir ? "auto" : "smooth" });
      const alvo = $opt(`[data-ck-tela="${tela}"] [data-ck-foco]`) || $opt(`[data-ck-tela="${tela}"]`);
      alvo?.focus({ preventScroll: true });
    }
  }

  function atualizarProgresso() {
    const r = respostas();
    const respondidas = Object.keys(r).length;
    const i = AREAS.findIndex((a) => a.id === atual);
    $("[data-ck-progresso-rotulo]").textContent = i >= 0 ? `Área ${i + 1} de ${AREAS.length}` : "Revisão";
    $("[data-ck-progresso-conta]").textContent = `${respondidas} de ${TOTAL_AFIRMACOES} respondidas`;
    for (const area of AREAS) {
      const barra = $(`[data-ck-barra="${area.id}"]`);
      const feitas = area.afirmacoes.filter((_, n) => chave(area, n) in r).length;
      barra.classList.toggle("is-completa", feitas === area.afirmacoes.length);
      barra.classList.toggle("is-atual", area.id === atual);
    }
  }

  function marcarFalta(item: HTMLElement, falta: boolean) {
    item.classList.toggle("is-falta", falta);
    const aviso = $opt("[data-ck-falta]", item);
    if (aviso) aviso.hidden = !falta;
  }

  // Moving on with a statement unanswered marks it and focuses the first one, instead of
  // disabling the button with no word on why.
  function validarArea(id: string): boolean {
    const area = AREAS.find((a) => a.id === id)!;
    const r = respostas();
    let primeira: HTMLInputElement | null = null;
    area.afirmacoes.forEach((_, n) => {
      const k = chave(area, n);
      const item = $(`[data-ck-pergunta="${k}"]`);
      const falta = !(k in r);
      marcarFalta(item, falta);
      if (falta && !primeira) primeira = $<HTMLInputElement>("input", item);
    });
    if (primeira) (primeira as HTMLInputElement).focus();
    return !primeira;
  }

  function preencherRevisao() {
    const r = respostas();
    for (const el of $$("[data-ck-resumo]")) {
      const v = r[el.dataset.ckResumo!];
      el.textContent = RESPOSTAS.find((o) => o.valor === v)?.rotulo ?? "Sem resposta";
      el.dataset.valor = v === undefined ? "" : String(v);
    }
  }

  function preencherResultado() {
    const res = calcularResultado(respostas());
    $("[data-ck-nivel-nome]").textContent = NIVEIS[res.nivel].nome;
    $("[data-ck-nivel-texto]").textContent = NIVEIS[res.nivel].texto;
    $("[data-ck-tela=\"resultado\"]").dataset.nivel = res.nivel;
    for (const { area, fracao } of res.areas) {
      const item = $(`[data-ck-area-resultado="${area.id}"]`);
      item.dataset.situacao = fracao >= 0.67 ? "bem" : fracao >= 0.34 ? "parte" : "falta";
      const preenchimento = $opt("[data-ck-preenchimento]", item);
      if (preenchimento) preenchimento.style.width = `${Math.max(fracao * 100, 4)}%`;
      const rotulo = $opt("[data-ck-situacao]", item);
      if (rotulo) rotulo.textContent = situacao(fracao);
      const blocos = $$("[data-ck-bloco]", item);
      const cheios = Math.round(fracao * blocos.length);
      blocos.forEach((b, i) => b.classList.toggle("is-cheio", i < cheios));
    }

    // Radar: each point sits at its area's share along its axis, never at the very centre.
    const forma = $opt("[data-ck-radar-forma]");
    if (forma) {
      const pts = res.areas.map(({ fracao }, i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / AREAS.length;
        const r = RADAR.r * Math.max(fracao, 0.06);
        return [RADAR.cx + Math.cos(a) * r, RADAR.cy + Math.sin(a) * r];
      });
      forma.setAttribute("points", pts.map((p) => p.map((n) => n.toFixed(1)).join(",")).join(" "));
      pts.forEach(([x, y], i) => {
        const c = $opt(`[data-ck-radar-ponto="${i}"]`);
        c?.setAttribute("cx", x.toFixed(1));
        c?.setAttribute("cy", y.toFixed(1));
      });
    }

    const fracao = (id: string) => res.areas.find((a) => a.area.id === id)!.fracao;
    $("[data-ck-forte-nome]").textContent = res.forte.nome;
    $("[data-ck-forte-texto]").textContent = textoForte(res.forte, fracao(res.forte.id));
    $("[data-ck-fraca-nome]").textContent = res.fraca.nome;
    $("[data-ck-fraca-texto]").textContent = textoFraca(res.fraca, fracao(res.fraca.id));
    // In a tie the strongest and the weakest area are the same one, so the two cards would
    // contradict each other. The tie note and the action for the week stand in for them.
    $("[data-ck-empate]").hidden = !res.empate;
    const destaques = $opt("[data-ck-destaques]");
    if (destaques) destaques.hidden = res.empate;
    $("[data-ck-acao]").textContent = res.fraca.acao;
    return res;
  }

  const video = $opt<HTMLVideoElement>("[data-ck-video]");
  if (video && reduzir) { video.removeAttribute("autoplay"); video.pause(); }

  // Intro: resume saved progress, or start fresh. The labels and the destination are read
  // from storage each time, never from a copy taken on load, so starting over or redoing
  // the checklist can't send "Começar" back to a screen whose answers were cleared.
  const salvo = ler();
  const comecar = $<HTMLButtonElement>("[data-ck-comecar]");
  const recomecar = $<HTMLButtonElement>("[data-ck-recomecar]");
  const rotuloComecar = comecar.firstChild!.textContent!;
  if (salvo) {
    for (const [k, v] of Object.entries(salvo.respostas)) {
      const input = form.querySelector<HTMLInputElement>(`input[name="${CSS.escape(k)}"][value="${v}"]`);
      if (input) input.checked = true;
    }
  }

  const temProgresso = (s: Salvo | null): s is Salvo => !!s && Object.keys(s.respostas).length > 0;
  function prepararInicio() {
    const tem = temProgresso(ler());
    comecar.firstChild!.textContent = tem ? "Continuar de onde parei " : rotuloComecar;
    recomecar.hidden = !tem;
  }
  prepararInicio();

  comecar.addEventListener("click", () => {
    const s = ler();
    if (!temProgresso(s)) track("Checklist Started");
    mostrar(temProgresso(s) && s.tela !== "inicio" ? s.tela : AREAS[0].id);
  });

  function zerar() {
    form.reset();
    for (const el of $$<HTMLElement>("[data-ck-pergunta]", form)) marcarFalta(el, false);
    apagar();
  }

  recomecar.addEventListener("click", () => {
    zerar();
    track("Checklist Started", { recomeco: true });
    mostrar(AREAS[0].id);
  });

  form.addEventListener("change", (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>("[data-ck-pergunta]");
    if (item) marcarFalta(item, false);
    atualizarProgresso();
    salvar(atual);
  });

  for (const btn of $$("[data-ck-avancar]")) {
    btn.addEventListener("click", () => {
      if (!validarArea(atual)) return;
      track("Checklist Area Completed", { area: atual, posicao: AREAS.findIndex((a) => a.id === atual) + 1 });
      mostrar(TELAS[TELAS.indexOf(atual) + 1]);
    });
  }
  for (const btn of $$("[data-ck-voltar]")) {
    btn.addEventListener("click", () => mostrar(TELAS[TELAS.indexOf(atual) - 1]));
  }
  for (const btn of $$("[data-ck-editar]")) {
    btn.addEventListener("click", () => mostrar(btn.dataset.ckEditar!));
  }

  $("[data-ck-ver-resultado]").addEventListener("click", () => {
    // Editing from the review can't leave a gap, but a hand-edited save could.
    const incompleta = AREAS.find((a) => a.afirmacoes.some((_, n) => !(chave(a, n) in respostas())));
    if (incompleta) { mostrar(incompleta.id); validarArea(incompleta.id); return; }
    mostrar("resultado");
    const res = calcularResultado(respostas());
    track("Checklist Completed", { nivel: res.nivel, area_forte: res.forte.id, area_fraca: res.fraca.id });
  });

  $("[data-ck-refazer]").addEventListener("click", () => {
    zerar();
    mostrar("inicio");
  });

  // The two forms: the result by e-mail, and the challenge sign-up. Each says what the
  // e-mail is for next to its button; the marketing box is optional and starts unchecked.
  // Until a form's endpoint exists in LINKS nothing is sent, and the form says so.
  const FORMULARIOS = {
    resultado: {
      endpoint: LINKS.envioEmail,
      evento: "Checklist Email Submitted",
      ok: "Pronto. Seu resultado está a caminho do seu e-mail.",
      inativo: "O envio por e-mail ainda não está ativo nesta versão da página.",
    },
    desafio: {
      endpoint: LINKS.inscricaoDesafio,
      evento: "Checklist Challenge Signup",
      ok: "Inscrição feita. Você vai receber as informações do desafio por e-mail.",
      inativo: "As inscrições para o desafio ainda não estão abertas nesta versão da página.",
    },
  } as const;

  for (const f of $$<HTMLFormElement>("[data-ck-enviar]")) {
    const tipo = f.dataset.ckEnviar as keyof typeof FORMULARIOS;
    const config = FORMULARIOS[tipo];
    const status = $("[data-ck-status]", f);
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      const campo = $<HTMLInputElement>("input[name=email]", f);
      const valido = campo.checkValidity() && campo.value.trim() !== "";
      $("[data-ck-erro]", f).hidden = valido;
      campo.setAttribute("aria-invalid", String(!valido));
      if (!valido) { campo.focus(); return; }

      const dados = new FormData(f);
      const marketing = dados.get("marketing") === "on";
      if (!config.endpoint) {
        status.textContent = config.inativo;
        status.dataset.tipo = "erro";
        return;
      }

      const corpo: Record<string, unknown> = {
        email: campo.value.trim(),
        nome: String(dados.get("nome") || "").trim(),
        marketing,
        variante,
      };
      // The result goes only with the form that offers to send it.
      if (tipo === "resultado") {
        const res = calcularResultado(respostas());
        Object.assign(corpo, {
          empresa: String(dados.get("empresa") || "").trim(),
          nivel: res.nivel,
          area_forte: res.forte.id,
          area_fraca: res.fraca.id,
          respostas: respostas(),
        });
      }

      const botao = $<HTMLButtonElement>("button[type=submit]", f);
      botao.disabled = true;
      status.textContent = "Enviando…";
      status.dataset.tipo = "";
      try {
        const r = await fetch(config.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(corpo),
        });
        if (!r.ok) throw new Error(String(r.status));
        status.textContent = config.ok;
        status.dataset.tipo = "ok";
        track(config.evento, { marketing, tela: atual });
      } catch {
        status.textContent = "Não conseguimos enviar agora. Tente de novo em alguns minutos.";
        status.dataset.tipo = "erro";
        botao.disabled = false;
      }
    });
  }

  // A reload in the middle keeps the screen the person was on. The browser would restore
  // the old scroll position, which belonged to another screen.
  if (temProgresso(salvo) && salvo.tela !== "inicio") {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    mostrar(salvo.tela, { focar: false });
    window.scrollTo(0, 0);
  }
}
