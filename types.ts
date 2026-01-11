
export enum ProjectPhase {
  FEASIBILITY = 'Viabilidade e Estudo',
  INFRASTRUCTURE = 'Infraestrutura e Acessos',
  REGULATION = 'Regulamentação e Licenciamento',
  PARTNERSHIP = 'Parcerias e Fomento',
  LAUNCH = 'Lançamento e Promoção'
}

export interface AnalysisSection {
  title: string;
  content: string;
  icon: string;
}

export interface ImplementationStep {
  phase: ProjectPhase;
  actions: string[];
  responsibles: string[];
  timeline: string;
}
