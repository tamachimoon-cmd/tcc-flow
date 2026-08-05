"use client";

import { useState } from "react";

const initialSections = [
  {
    id: "problem",
    label: "Problema de pesquisa",
    content:
      "Como uma plataforma centralizada de gestão e padronização de scripts pode reduzir erros operacionais e melhorar o acesso ao conhecimento técnico em equipes de redes B2B?",
  },
  {
    id: "general-objective",
    label: "Objetivo geral",
    content:
      "Desenvolver e avaliar uma plataforma web para centralização, padronização e gestão de scripts técnicos utilizados em operações de redes B2B.",
  },
  {
    id: "methodology",
    label: "Metodologia inicial",
    content:
      "Pesquisa aplicada, com abordagem mista, desenvolvimento de protótipo e comparação entre o processo tradicional e o uso do ScriptHub em cenários controlados.",
  },
];

export function PreProjectEditor() {
  const [sections, setSections] = useState(initialSections);
  const [saved, setSaved] = useState(false);

  return (
    <div className="editor-layout">
      <section className="editor-card">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Documento em construção</span>
            <h2>Pré-projeto</h2>
          </div>
          <span className={saved ? "status status-success" : "status"}>
            {saved ? "Alterações salvas" : "Rascunho local"}
          </span>
        </div>

        {sections.map((section, index) => (
          <label className="editor-field" key={section.id}>
            {section.label}
            <textarea
              onChange={(event) => {
                const content = event.target.value;
                setSaved(false);
                setSections((current) =>
                  current.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, content } : item,
                  ),
                );
              }}
              rows={5}
              value={section.content}
            />
          </label>
        ))}

        <button
          className="button button-primary"
          onClick={() => setSaved(true)}
          type="button"
        >
          Salvar rascunho
        </button>
      </section>

      <aside className="audit-card">
        <span className="eyebrow">Revisor de coerência</span>
        <h2>Diagnóstico inicial</h2>
        <div className="score-ring" aria-label="Pontuação de coerência: 82 de 100">
          82
        </div>
        <ul className="audit-list">
          <li className="is-good">Problema e objetivo geral estão alinhados.</li>
          <li className="is-good">A metodologia permite comparar processos.</li>
          <li className="is-warning">
            Defina quais tipos de erro serão considerados na avaliação.
          </li>
          <li className="is-warning">
            Delimite fabricantes ou serviços incluídos no piloto.
          </li>
        </ul>
        <p className="audit-disclaimer">
          Esta análise é uma sugestão automatizada e deve ser revisada pelo
          estudante e pelo orientador.
        </p>
      </aside>
    </div>
  );
}
