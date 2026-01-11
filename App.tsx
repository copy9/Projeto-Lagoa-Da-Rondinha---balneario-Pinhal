
import React, { useState, useEffect, useRef } from 'react';
import { 
  STRATEGIC_PILLARS, 
  FULL_ROADMAP, 
  PPP_TARGETS, 
  COST_ITEMS, 
  FUNDING_BREAKDOWN, 
  LAGOON_NAME 
} from './constants';
import { ProjectAssistant } from './services/geminiService';
import ReactMarkdown from 'https://esm.sh/react-markdown';

const App: React.FC = () => {
  const [aiDossier, setAiDossier] = useState<string>('');
  const [conceptImg, setConceptImg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const sections = {
    vision: useRef<HTMLElement>(null),
    impact: useRef<HTMLElement>(null),
    finance: useRef<HTMLElement>(null),
    roadmap: useRef<HTMLElement>(null),
    dossier: useRef<HTMLElement>(null)
  };

  const loadData = async () => {
    setLoading(true);
    const assistant = new ProjectAssistant();
    try {
      const [text, img] = await Promise.all([
        assistant.refineProposal("Consultoria de Estratégia", "Desenvolvimento Econômico"),
        assistant.generateConceptImage("Lagoa da Rondinha Realismo")
      ]);
      setAiDossier(text || '');
      setConceptImg(img);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownload = () => {
    alert("Dossiê Executivo sendo gerado. O documento PDF incluirá as notas de que os valores são referenciais para estudo técnico inicial.");
  };

  const formatBRL = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navbar Executiva e Funcional */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo(sections.vision)}>
            <div className="bg-slate-900 p-2.5 rounded-xl shadow-lg">
              <i className="fa-solid fa-landmark text-white text-lg"></i>
            </div>
            <div>
              <span className="block font-black uppercase tracking-tighter text-base leading-none">Gestão Balneário Pinhal</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Masterplan: {LAGOON_NAME}</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <button onClick={() => scrollTo(sections.vision)} className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">Visão</button>
            <button onClick={() => scrollTo(sections.impact)} className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">Vantagens</button>
            <button onClick={() => scrollTo(sections.finance)} className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">Orçamento</button>
            <button onClick={() => scrollTo(sections.roadmap)} className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">Roadmap</button>
            <button onClick={() => scrollTo(sections.dossier)} className="text-blue-600 font-black border-b-2 border-blue-600 pb-1">Dossiê Técnico</button>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2"
          >
            <i className="fa-solid fa-paper-plane"></i>
            Protocolar Proposta
          </button>
        </div>
      </nav>

      {/* Hero: A Liderança do Prefeito */}
      <section ref={sections.vision} id="vision" className="relative h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.3]" 
            alt={LAGOON_NAME}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-6 py-2 bg-blue-600/30 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-10">
            Administração Municipal • Legado e Gestão
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
            Um Novo Marco para <br/>
            <span className="text-blue-400">Balneário Pinhal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            A visão estratégica da gestão municipal para transformar a Lagoa da Rondinha no polo náutico sustentável mais importante do Litoral Norte.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => scrollTo(sections.dossier)} className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-2xl">
              Dossiê de Viabilidade
            </button>
            <button onClick={() => scrollTo(sections.finance)} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all">
              Métricas e Estudo de Custo
            </button>
          </div>
        </div>
      </section>

      {/* Vantagens Municipais */}
      <section ref={sections.impact} id="impact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-6">Pilar de Desenvolvimento e Orgulho</h2>
            <p className="text-slate-500 text-xl font-light max-w-3xl">Uma iniciativa desenhada para elevar o padrão de vida em Pinhal, gerando valor direto para o cidadão e a economia local.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {STRATEGIC_PILLARS.map((p, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${p.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-black mb-4 text-slate-900 tracking-tight uppercase">{p.title}</h4>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">{p.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{p.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financeiro e Custos - Explícito como Referencial */}
      <section ref={sections.finance} id="finance" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase">Engenharia <br/><span className="text-blue-400">Financeira de Estudo.</span></h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                A estratégia da prefeitura foca na captação de <strong>Emendas Parlamentares</strong> e parcerias privadas, garantindo baixo ônus ao tesouro. Os valores abaixo são <strong>referenciais para planejamento inicial</strong>.
              </p>
              
              <div className="bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <h5 className="text-sm font-black uppercase tracking-widest text-blue-400">Estimativas Preliminares (Fase 1)</h5>
                  <span className="px-3 py-1 bg-red-600/20 text-red-400 text-[9px] font-black uppercase rounded">Valores Sujeitos a Ajuste</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <th className="px-10 py-5">Componente</th>
                        <th className="px-10 py-5 text-right">Projeção Base</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {COST_ITEMS.map((item, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                          <td className="px-10 py-6">
                            <span className="block font-black uppercase text-blue-50 mb-1">{item.item}</span>
                            <span className="text-[11px] text-slate-400 font-medium leading-tight">{item.desc}</span>
                          </td>
                          <td className="px-10 py-6 text-right font-black text-blue-400 tabular-nums">{formatBRL(item.value)}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-600/10">
                        <td className="px-10 py-8 font-black uppercase text-xs tracking-widest text-blue-100 italic">Total Estimado para Planejamento</td>
                        <td className="px-10 py-8 text-right text-3xl font-black text-blue-400 tabular-nums">{formatBRL(850000)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white text-slate-900 p-12 rounded-[3.5rem] shadow-2xl relative">
                <h4 className="text-2xl font-black uppercase mb-8 tracking-tighter border-b border-slate-100 pb-6">Modelagem de Recursos</h4>
                <div className="space-y-8">
                  {FUNDING_BREAKDOWN.map((f, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">{f.label}</span>
                        <span className="font-black text-sm text-blue-600">{f.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${f.color}`} style={{ width: `${f.percent}%` }}></div>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium mt-2">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 p-12 rounded-[3.5rem] shadow-xl text-white">
                <h4 className="text-2xl font-black uppercase mb-8 tracking-tighter">Oportunidades PPP</h4>
                <div className="space-y-5">
                  {PPP_TARGETS.map((p, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div>
                        <span className="block font-black text-sm uppercase">{p.company}</span>
                        <span className="text-[10px] text-blue-100 font-bold opacity-80 uppercase tracking-widest">{p.category}</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <i className="fa-solid fa-link text-xs"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualização Realista da Rondinha */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">A Rondinha como Polo Gaúcho</h2>
              <p className="text-slate-500 text-xl font-light">Projeção visual baseada no bioma real: águas planas, dunas e vegetação nativa.</p>
            </div>
            <div className="flex gap-4">
              <span className="px-6 py-2 bg-slate-100 text-[10px] font-black uppercase text-slate-400 rounded-xl">Realismo Regional</span>
              <span className="px-6 py-2 bg-blue-600 text-[10px] font-black uppercase text-white rounded-xl shadow-xl shadow-blue-200">Meta 2025</span>
            </div>
          </div>
          
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl bg-slate-200 border-8 border-white group">
            {conceptImg ? (
              <img src={conceptImg} alt={LAGOON_NAME} className="w-full h-[700px] object-cover transition-transform duration-[6000ms] group-hover:scale-105" />
            ) : (
              <div className="w-full h-[700px] flex flex-col items-center justify-center gap-6">
                <i className="fa-solid fa-spinner fa-spin text-5xl text-blue-600"></i>
                <span className="text-xs font-black uppercase text-slate-400 tracking-[0.3em]">Gerando Renderização Regional...</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-12 left-12 right-12 p-12 bg-white/95 backdrop-blur-xl rounded-[3rem] max-w-lg shadow-2xl border border-white/20">
               <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Preservação Ativa</h4>
               <p className="text-slate-600 leading-relaxed font-medium text-lg">
                 O projeto prioriza estruturas efêmeras e materiais sustentáveis que respeitam o leito da lagoa e a fauna local. O esporte é o maior aliado da ecologia.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Funcional */}
      <section ref={sections.roadmap} id="roadmap" className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6">Plano de Ação Governamental</h2>
            <p className="text-slate-500 text-xl font-light">Um cronograma estruturado sob a liderança do gabinete para entrega em 12 meses.</p>
          </div>
          <div className="space-y-4">
            {FULL_ROADMAP.map((step, i) => (
              <div key={i} className="relative pl-12 md:pl-0 border-l-2 md:border-l-0 border-blue-600/20 pb-16 last:pb-0">
                <div className="flex flex-col md:flex-row gap-12 group">
                  <div className="md:w-1/3 md:text-right">
                    <span className="text-blue-600 font-black text-8xl opacity-10 group-hover:opacity-100 transition-opacity duration-700">0{i+1}</span>
                    <h4 className="text-2xl font-black text-slate-900 mt-2 mb-4 uppercase tracking-tighter leading-none">{step.phase}</h4>
                    <span className="inline-block px-5 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">{step.timeline}</span>
                  </div>
                  <div className="flex-1 bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:border-blue-100 border border-slate-100 transition-all">
                    <ul className="space-y-6">
                      {step.actions.map((act, j) => (
                        <li key={j} className="flex gap-5">
                          <i className="fa-solid fa-circle-check text-blue-600 mt-1.5 text-lg"></i>
                          <p className="text-slate-700 font-bold text-lg leading-tight">{act}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap gap-3">
                      {step.responsibles.map((r, k) => (
                        <span key={k} className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100">{r}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dossiê Técnico - Consultoria Marco Dutra */}
      <section ref={sections.dossier} id="dossier" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[400px_1fr] gap-24 items-start">
            <div className="sticky top-32 space-y-10">
              <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-200">
                <div className="w-24 h-24 bg-slate-900 rounded-[2rem] mb-8 overflow-hidden border-4 border-slate-50 shadow-xl">
                  <img src="https://picsum.photos/seed/marcodutra/600/600" alt="Marco Dutra" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">Marco Antonio Dutra</h4>
                <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Consultor de Estratégia e Tecnologia</p>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-10">
                  Suporte técnico especializado na modelagem de viabilidade econômica e articulação de parcerias estratégicas para a administração municipal.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/marco-antonio-dutra/" target="_blank" className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-slate-100 text-slate-900 font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-slate-200 transition-all">
                    Enviar Pitch
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-24 rounded-[5rem] shadow-2xl border border-slate-100 relative min-h-[800px]">
               <div className="flex items-center justify-between mb-16 pb-10 border-b border-slate-100">
                  <div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-2">Dossiê Executivo de Gabinete</h3>
                    <p className="text-slate-400 font-bold uppercase text-[11px] tracking-widest italic">Nota: Todos os valores financeiros são estimativas experienciais sujeitas a cotação.</p>
                  </div>
                  {loading && <i className="fa-solid fa-brain-circuit fa-spin text-blue-600 text-4xl"></i>}
               </div>

               <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-p:text-slate-600 prose-p:text-xl prose-p:leading-relaxed prose-strong:text-blue-600 prose-li:text-slate-600 prose-li:font-medium">
                  {aiDossier ? (
                    <ReactMarkdown>{aiDossier}</ReactMarkdown>
                  ) : (
                    <div className="space-y-8">
                       <div className="h-5 bg-slate-100 rounded-full w-3/4 animate-pulse"></div>
                       <div className="h-5 bg-slate-100 rounded-full w-full animate-pulse"></div>
                       <div className="h-[400px] bg-slate-50 rounded-[3rem] animate-pulse"></div>
                    </div>
                  )}
               </div>

               <div className="mt-24 pt-16 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                  <button onClick={handleDownload} className="flex-1 bg-slate-900 text-white py-7 rounded-[2rem] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl flex items-center justify-center gap-4 text-xs">
                    <i className="fa-solid fa-file-pdf text-xl"></i>
                    Baixar Masterplan (PDF)
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-blue-600 text-white py-7 rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-xs">
                    Solicitar Pitch Presencial
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-black text-slate-900 uppercase tracking-[0.6em] mb-4">Prefeitura Municipal de Balneário Pinhal</p>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-12">Polo Náutico {LAGOON_NAME} • Gestão Visionária</p>
          <div className="flex justify-center gap-10">
             {['linkedin', 'instagram', 'facebook'].map(social => (
               <a key={social} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                 <i className={`fa-brands fa-${social}`}></i>
               </a>
             ))}
          </div>
        </div>
      </footer>

      {/* Modal Funcional */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg rounded-[3.5rem] shadow-2xl p-12 relative animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-slate-400 hover:text-slate-900">
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-xl shadow-blue-100">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">Protocolar Material</h3>
              <p className="text-slate-500 font-medium">Envie o material estratégico para a Secretaria de Desenvolvimento Econômico ou Gabinete.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Dossiê protocolado eletronicamente com sucesso!'); setIsModalOpen(false); }} className="space-y-4">
              <input type="text" placeholder="Seu Nome / Departamento" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm focus:outline-none focus:border-blue-600 transition-all" required />
              <input type="email" placeholder="E-mail Institucional" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm focus:outline-none focus:border-blue-600 transition-all" required />
              <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all mt-4">
                Confirmar Envio Protocolado
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
