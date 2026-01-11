
import { ProjectPhase, ImplementationStep } from './types';

export const LAGOON_NAME = "Lagoa da Rondinha (Ronda)";

export const STRATEGIC_PILLARS = [
  {
    title: "Governança Visionária",
    desc: "Um marco da atual gestão que projeta Balneário Pinhal como referência em inovação turística e desenvolvimento sustentável no Rio Grande do Sul.",
    icon: "fa-landmark",
    metric: "Legado Político"
  },
  {
    title: "Qualidade de Vida",
    desc: "Foco total no morador, oferecendo infraestrutura de lazer, escolinhas de esporte para a rede pública e segurança para as famílias pinhalenses.",
    icon: "fa-people-group",
    metric: "Impacto Comunitário"
  },
  {
    title: "Vanguarda Econômica",
    desc: "Atração de investimentos e combate à sazonalidade, garantindo que o comércio local prospere o ano inteiro através do turismo náutico.",
    icon: "fa-chart-line",
    metric: "Desenvolvimento 365 dias"
  },
  {
    title: "Preservação Ativa",
    desc: "Uso inteligente da Lagoa da Rondinha. O esporte não motorizado é o maior aliado da preservação ambiental, educando e protegendo o nosso bioma.",
    icon: "fa-leaf",
    metric: "Sustentabilidade"
  }
];

export const COST_ITEMS = [
  { item: "Acessos e Estacionamento", desc: "Adequação de vias e pavimentação ecológica (Estimativa referencial baseada em projetos similares).", value: 250000 },
  { item: "Estrutura Náutica", desc: "Píeres modulares e rampas de baixo impacto (Valor para fins de estudo preliminar).", value: 350000 },
  { item: "Urbanismo e Sinalização", desc: "Iluminação solar LED e mobiliário urbano (Estimativa sujeita a cotação final).", value: 180000 },
  { item: "Estudos e Projetos", desc: "Licenciamento FEPAM e projetos executivos (Referência para orçamento base).", value: 70000 }
];

export const FUNDING_BREAKDOWN = [
  { label: "Emendas Parlamentares", percent: 55, color: "bg-blue-600", desc: "Projeção de captação de recursos externos para infraestrutura." },
  { label: "Contrapartida Municipal", percent: 15, color: "bg-slate-700", desc: "Estimativa de investimento direto para contrapartida de convênios." },
  { label: "Investimento Privado (PPP)", percent: 30, color: "bg-cyan-500", desc: "Expectativa de aporte via editais de concessão operacional." }
];

export const PPP_TARGETS = [
  { company: "Operadores Náuticos do RS", category: "Escolas e Aluguel", benefit: "Aulas para a comunidade" },
  { company: "Marcas Esportivas Nacionais", category: "Naming Rights", benefit: "Marketing para o município" },
  { company: "Rede Gastronômica Local", category: "Concessão de Serviços", benefit: "Empregos em Pinhal" }
];

export const FULL_ROADMAP: ImplementationStep[] = [
  {
    phase: ProjectPhase.FEASIBILITY,
    actions: [
      "Assinatura do Termo de Início pelo Prefeito Municipal",
      "Articulação técnica para liberação de Emendas Parlamentares",
      "Levantamento Batimétrico e Estudo Ambiental Preliminar",
      "Modelagem do Edital de Chamamento Público para PPP"
    ],
    responsibles: ["Gabinete do Prefeito", "Equipe Técnica"],
    timeline: "Meses 1-3"
  },
  {
    phase: ProjectPhase.INFRASTRUCTURE,
    actions: [
      "Licitação e contratação de obras sustentáveis",
      "Implementação dos decks flutuantes e sinalização",
      "Instalação de iluminação solar e segurança monitorada"
    ],
    responsibles: ["Secretaria de Obras", "Planejamento"],
    timeline: "Meses 4-10"
  },
  {
    phase: ProjectPhase.LAUNCH,
    actions: [
      "Evento de Inauguração com Festival Náutico de Pinhal",
      "Abertura oficial da Escola Municipal de SUP e Vela",
      "Campanha de marketing: Pinhal como destino náutico nacional"
    ],
    responsibles: ["Turismo", "Comunicação Social"],
    timeline: "Mês 12+"
  }
];
