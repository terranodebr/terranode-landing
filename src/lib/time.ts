// The founders, as the /sobre/ page shows them and as the Organization JSON-LD lists
// them (layouts/Base.astro). Facts come from the pitch deck's "Sócios fundadores" slide;
// the bios expand on them without adding employers, degrees or dates the deck doesn't name,
// and Bruno's leaves out the companies he worked at, as he asked. Ambientare Geotech is a
// company, not a person; its text is the one it sent, with typos fixed.
export interface Fundador {
  nome: string;
  /** Set for a founding partner that is a company (Organization in the JSON-LD). */
  empresa?: boolean;
  iniciais: string;
  cargo: string;
  /** Short lines under the name, the deck's facts. */
  destaques: string[];
  /** One paragraph per item. */
  bio: string[];
}

export const FUNDADORES: Fundador[] = [
  {
    nome: "Bruno Lima",
    iniciais: "BL",
    cargo: "Sócio fundador · Produto e design",
    destaques: [
      "15+ anos em produtos digitais B2B e SaaS",
      "Carreira em startups, do primeiro produto à aquisição",
      "Design de apps mobile e plataformas web",
    ],
    bio: [
      "Designer de produto há mais de 15 anos, com a carreira construída em startups de produtos digitais B2B e SaaS. Já foi o primeiro designer de uma startup e acompanhou o produto das primeiras versões até a aquisição da empresa, e liderou o design de apps mobile e plataformas web usadas no dia a dia de operações.",
      "Conhece o ritmo de uma startup: testar cedo, ouvir quem usa e transformar o que aprende em produto. No TerraNode, cuida do produto e do design, do formulário montado no painel até a tela que a equipe usa em campo.",
    ],
  },
  {
    nome: "George Silva",
    iniciais: "GS",
    cargo: "Sócio fundador · Geógrafo e desenvolvedor",
    destaques: [
      "15+ anos na área geoespacial",
      "Geógrafo",
      "Desenvolvedor de software geoespacial",
    ],
    bio: [
      "Geógrafo e desenvolvedor, George soma mais de 15 anos na área geoespacial, construindo tanto software de uso geral quanto software feito para dados espaciais.",
      "Essa dupla formação traz para o TerraNode o olhar de quem trabalha com o dado geográfico no dia a dia: coordenadas, camadas, sistemas de referência e a ponte entre o que se coleta em campo e o SIG da organização.",
    ],
  },
  {
    nome: "Roque Betiol",
    iniciais: "RB",
    cargo: "Sócio fundador · Full stack engineer",
    destaques: [
      "15+ anos em infraestrutura e software",
      "Engenheiro full stack",
      "Carreira em empresas da área geoespacial",
    ],
    bio: [
      "Engenheiro full stack com mais de 15 anos em infraestrutura e desenvolvimento de software, construídos em empresas da área geoespacial.",
      "Traz para o TerraNode a experiência de manter sistemas geoespaciais em produção: aplicações que precisam funcionar do aparelho em campo ao servidor, com dados sensíveis e sem perder nenhum registro no caminho.",
    ],
  },
  {
    nome: "Ambientare Geotech",
    empresa: true,
    iniciais: "AG",
    cargo: "Sócia fundadora · Geoprocessamento",
    destaques: [
      "Soluções em geoprocessamento, desde 2024",
      "Setores elétrico, fundiário, ambiental e de infraestrutura",
      "Inteligência geográfica para decisões operacionais e gerenciais",
    ],
    bio: [
      "Criada em 2024 a partir da paixão pela análise territorial, a Ambientare Geotech é uma empresa de desenvolvimento de soluções em geoprocessamento que une o rigor técnico a uma abordagem criativa e colaborativa. Seu foco é extrair o máximo de valor analítico de cada território, para que a inteligência geográfica fomente decisões mais assertivas no seu negócio, nos níveis operacional e gerencial.",
      "A Ambientare Geotech traz para o TerraNode seu conhecimento de negócio e sua experiência nos setores elétrico, fundiário, ambiental e de infraestrutura. Conhece os desafios do campo e sabe como otimizar a operação com tecnologia orientada ao negócio de cada cliente.",
    ],
  },
];
