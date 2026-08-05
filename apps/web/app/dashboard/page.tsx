import Link from "next/link";
import { AppShell } from "@/components/app-shell";

const stages = [
  { label: "Contexto acadêmico", value: 100 },
  { label: "Tema e delimitação", value: 70 },
  { label: "Pré-projeto", value: 45 },
  { label: "Planejamento", value: 10 },
];

export default function DashboardPage() {
  return (
    <AppShell active="dashboard">
      <header className="page-header">
        <div>
          <span className="eyebrow">Quarta-feira, 5 de agosto</span>
          <h1>Bom dia, Sr. Marques.</h1>
          <p>O ScriptHub avançou. Agora falta transformar o recorte em método.</p>
        </div>
        <Link className="button button-primary" href="/projetos/novo">
          Novo projeto
        </Link>
      </header>

      <section className="project-hero-card">
        <div>
          <span className="status status-success">Projeto ativo</span>
          <h2>ScriptHub</h2>
          <p>
            Plataforma web para padronização e gestão de scripts em operações
            de redes B2B.
          </p>
          <Link className="text-link" href="/projetos/demo/tema">
            Continuar jornada →
          </Link>
        </div>
        <div className="progress-summary">
          <strong>42%</strong>
          <span>do pré-projeto estruturado</span>
          <div className="progress-bar">
            <span style={{ width: "42%" }} />
          </div>
        </div>
      </section>

      <div className="dashboard-grid">
        <section className="panel">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">Jornada acadêmica</span>
              <h2>Progresso por etapa</h2>
            </div>
          </div>
          <div className="stage-list">
            {stages.map((stage) => (
              <div className="stage-row" key={stage.label}>
                <div>
                  <strong>{stage.label}</strong>
                  <span>{stage.value}%</span>
                </div>
                <div className="progress-bar small">
                  <span style={{ width: `${stage.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="panel next-action-card">
          <span className="eyebrow">Próxima ação recomendada</span>
          <h2>Definir os indicadores do piloto</h2>
          <p>
            Escolha como medir tempo de consulta, erros operacionais e
            usabilidade antes de fechar a metodologia.
          </p>
          <Link className="button button-primary" href="/projetos/demo/pre-projeto">
            Revisar pré-projeto
          </Link>
        </aside>
      </div>

      <section className="panel ai-summary-card">
        <div className="assistant-heading">
          <div>
            <span className="eyebrow">Flow IA · Revisor de coerência</span>
            <h2>Dois pontos precisam da sua decisão</h2>
          </div>
          <span className="status status-ai">Análise automatizada</span>
        </div>
        <div className="alert-grid">
          <article>
            <strong>Escopo técnico</strong>
            <p>O piloto ainda não define fabricantes ou serviços incluídos.</p>
          </article>
          <article>
            <strong>Métrica de erro</strong>
            <p>É necessário definir o que será contado como erro operacional.</p>
          </article>
        </div>
      </section>
    </AppShell>
  );
}
