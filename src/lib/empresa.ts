// The company's public contact details. The footer on every page and the Organization
// JSON-LD (layouts/Base.astro) both read from here, so the two never disagree.
export const EMPRESA = {
  instagram: "https://www.instagram.com/terranodebr/",
  linkedin: "https://www.linkedin.com/company/terranode-brasil/",
  endereco: {
    rua: "Rua Baraúna, 171",
    cidade: "Florianópolis",
    uf: "SC",
    pais: "BR",
  },
};

/** "Rua Baraúna, 171 · Florianópolis, SC", as the footer shows it. The city and the
 *  state are joined by a no-break space, so a narrow footer never leaves "SC" alone. */
export const enderecoEmLinha = `${EMPRESA.endereco.rua} · ${EMPRESA.endereco.cidade},\u00a0${EMPRESA.endereco.uf}`;
