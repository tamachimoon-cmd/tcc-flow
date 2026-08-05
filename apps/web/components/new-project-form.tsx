"use client";

import Link from "next/link";
import { useState } from "react";

export function NewProjectForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="success-panel" role="status">
        <span className="success-icon" aria-hidden="true">
          ✓
        </span>
        <div>
          <span className="eyebrow">Projeto criado</span>
          <h2>Agora vamos encontrar um tema defendível.</h2>
          <p>
            O contexto acadêmico foi salvo localmente nesta demonstração. A
            persistência real será conectada ao banco na próxima fase.
          </p>
          <Link className="button button-primary" href="/projetos/demo/tema">
            Continuar para o tema
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <label>
          Nome do projeto
          <input defaultValue="ScriptHub" name="title" required />
        </label>
        <label>
          Curso
          <input
            defaultValue="Inteligência Artificial e Ciência de Dados"
            name="course"
            required
          />
        </label>
        <label>
          Instituição
          <input name="institution" placeholder="Nome da instituição" required />
        </label>
        <label>
          Nível acadêmico
          <select defaultValue="pos" name="academicLevel" required>
            <option value="graduacao">Graduação</option>
            <option value="pos">Pós-graduação</option>
            <option value="mba">MBA</option>
            <option value="tecnico">Curso técnico</option>
          </select>
        </label>
        <label>
          Tipo de trabalho
          <select defaultValue="projeto" name="workType" required>
            <option value="monografia">Monografia</option>
            <option value="artigo">Artigo científico</option>
            <option value="projeto">Projeto tecnológico aplicado</option>
            <option value="estudo">Estudo de caso</option>
          </select>
        </label>
        <label>
          Prazo final
          <input name="deadline" required type="date" />
        </label>
      </div>

      <label>
        Área de interesse
        <textarea
          defaultValue="Gestão do conhecimento, padronização de scripts e redução de erros em operações técnicas B2B."
          name="interestArea"
          required
          rows={4}
        />
      </label>

      <div className="form-actions">
        <Link className="button button-ghost" href="/dashboard">
          Cancelar
        </Link>
        <button className="button button-primary" type="submit">
          Criar projeto
        </button>
      </div>
    </form>
  );
}
