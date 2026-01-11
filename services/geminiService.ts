
import { GoogleGenAI } from "@google/genai";

export class ProjectAssistant {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async refineProposal(userExpertise: string, targetSecretariat: string) {
    const prompt = `
      Você é um Consultor Estratégico em Gestão Pública especializado em infraestrutura turística.
      Projeto: Polo de Esportes Náuticos na Lagoa da Rondinha (Ronda), Balneário Pinhal/RS.
      Especialista Técnico: Marco Antonio Dutra.
      Secretaria Alvo: ${targetSecretariat}.

      INSTRUÇÕES EXECUTIVAS:
      1. FOCO NO PREFEITO: O texto deve ser escrito para que o Prefeito o use como discurso ou memorando de gabinete. O mérito e a visão são da gestão atual.
      2. MARCO ANTONIO DUTRA: Mencione-o apenas como o braço técnico que estruturou a viabilidade e a tecnologia.
      3. VALORES ESTIMADOS: É OBRIGATÓRIO mencionar que todos os valores financeiros são estimativas referenciais para estudo inicial, sujeitos a cotações, licitações e ajustes orçamentários.
      4. PPP E EMENDAS: Detalhe como a gestão captará recursos externos (Emendas) e atrairá capital privado (PPP), protegendo o caixa municipal.
      5. BIOMA LOCAL: Reforce o compromisso com a Lagoa da Rondinha, respeitando suas características naturais e o morador local.

      Formate em Markdown executivo de alto impacto.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Erro ao gerar dossiê técnico.";
    }
  }

  async generateConceptImage(promptDescription: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `A high-end photorealistic landscape of a coastal lagoon in Southern Brazil (Rio Grande do Sul), specifically Balneário Pinhal. Shallow flat blue-grey water with small wind-driven ripples. Low dunes with native restinga vegetation (grass and shrubs), no tropical plants, no palm trees. Simple sustainable floating wooden piers and a small eco-hub made of local sustainable wood. People practicing windsurf and stand up paddle. Clear blue sky, authentic southern coastal light. Cinematic 8k photography.` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
