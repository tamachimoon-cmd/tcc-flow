"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Suggestion = {
  title: string;
  scope: string;
  difficulty: "Baixa" | "Média" | "Alta";
  evidence: string;
};

const suggestions: Suggestion[] = [
  {
    title:
      "Plataforma web para padronização de scripts em operações de redes B2B",
    scope:
      "Desenvolver e avaliar um protótipo para consulta, versionamento e validação de scripts técnicos.",
    difficulty: "Média",
    evidence: "Comparação de tempo, erros e percepção de usabilidade.",
  },
  {
    title:
      "Gestão do conhecimento técnico aplicada ao provisionamento de telecomunicações",
    scope:
      "Analisar como a centralização de procedimentos reduz dependência de conhecimento informal.",
    difficulty: "Baixa",
    evidence: "Entrevistas, questionários e análise do processo atual.",
  },
  {
    title:
      "Uso de inteligência artificial para validar scripts de configuração de redes",
    scope:
      "Construir um validador experimental capaz de identificar variáveis ausentes e comandos incompatíveis.",
    difficulty: "Alta",
    evidence: "Conjunto de testes, precisão das regras e análise de falsos alertas.",
  },
];

export function ThemeAssistant() {
  const [context, setContext] = useState(
    "Quero transformar o ScriptHub em um TCC prático e medir se a plataforma reduz erros e tempo de consulta.",
  );
  const [generated, setGenerated] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const selected = useMemo(
    () => (selectedIndex === null ? null : suggestions[selectedIndex]),
    [selectedIndex],
  );

  return (
    <div className="assistant-layout">
      <section className="form-card">
        <span className="eyebrow">Seu contexto</span>
        <h2>O que você deseja investigar?</h2>
        <p className="muted">
          Descreva o problema, o ambiente e o resultado que pretende avaliar.
        </p>
        <textarea
          onChange={(event) => setContext(event.target.value)}
          rows={7}
          value={context}
        />
        <button
          className="button button-primary"
          disabled={context.trim().length < 20}
          onClick={() => setGenerated(true)}
          type="button"
        >
          Analisar possibilidades
        </button>
      </section>

      <section className="assistant-panel">
        <div className="assistant-heading">
          <div>
            <span className="eyebrow">Flow IA · Orientador</span>
            <h2>Sugestões de recorte</h2>
          </div>
          <span className="status status-ai">Sugestão da IA</span>
        </div>

        {!generated ? (
          <p className="empty-state">Preencha o contexto para receber sugestões.</p>
        ) : (
          <div className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <button
                className={
                  selectedIndex === index
                    ? "suggestion-card is-selected"
                    : "suggestion-card"
                }
                key={suggestion.title}
                onClick={() => setSelectedIndex(index)}
                type="button"
              >
                <span className="suggestion-number">0{index + 1}</span>
                <strong>{suggestion.title}</strong>
                <p>{suggestion.scope}</p>
                <div className="suggestion-meta">
                  <span>Dificuldade: {suggestion.difficulty}</span>
                  <span>{suggestion.evidence}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {selected && (
          <div className="decision-panel">
            <div>
              <span className="eyebrow">Sua decisão</span>
              <strong>{selected.title}</strong>
            </div>
            <Link className="button button-primary" href="/projetos/demo/pre-projeto">
              Confirmar e continuar
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
