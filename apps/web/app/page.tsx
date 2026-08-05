import Link from "next/link";
import { Brand } from "@/components/brand";

const journey = [
  "Defina um tema viável",
  "Construa o pré-projeto",
  "Organize cronograma e fontes",
  "Revise coerência e metodologia",
  "Prepare a apresentação",
  "Treine para a banca",
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header container">
        <Brand />
        <nav className="header-actions" aria-label="Ações principais">
          <Link className="button button-ghost" href="/dashboard">
            Ver demonstração
          </Link>
          <Link className="button button-primary" href="/projetos/novo">
            Começar meu TCC
          </Link>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Orientação acadêmica com IA responsável</span>
          <h1>Seu TCC precisa de direção, não de texto automático.</h1>
          <p>
            O TCC Flow ajuda você a transformar uma ideia ampla em um projeto
            coerente, pesquisável e defendível, acompanhando cada decisão do
            tema à banca.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href="/projetos/novo">
              Criar projeto
            </Link>
            <Link className="text-link" href="/projetos/demo/tema">
              Explorar o assistente de tema →
            </Link>
          </div>
          <div className="trust-row">
            <span>Sem referências inventadas</span>
            <span>Decisões sempre confirmadas</span>
            <span>Histórico de participação da IA</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Prévia do dashboard do TCC Flow">
          <div className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <div className="preview-sidebar" />
              <div className="preview-main">
                <span className="preview-label">Projeto ScriptHub</span>
                <strong>Seu próximo passo está claro.</strong>
                <div className="preview-progress">
                  <span style={{ width: "42%" }} />
                </div>
                <div className="preview-grid">
                  <div>
                    <small>Coerência</small>
                    <b>82/100</b>
                  </div>
                  <div>
                    <small>Prazo</small>
                    <b>Em dia</b>
                  </div>
                </div>
                <div className="preview-ai">
                  <small>Flow IA · Orientador</small>
                  <p>Delimite o piloto a dois serviços de rede.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading centered">
          <span className="eyebrow">Jornada guiada</span>
          <h2>Uma etapa de cada vez, sem perder o projeto inteiro de vista.</h2>
        </div>
        <div className="journey-grid">
          {journey.map((step, index) => (
            <article className="journey-card" key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section container ethics-banner">
        <div>
          <span className="eyebrow">Integridade acadêmica por projeto</span>
          <h2>A IA ajuda a pensar. Ela não fabrica pesquisa.</h2>
        </div>
        <p>
          O TCC Flow distingue conteúdo do estudante, sugestão da IA, inferência
          e fonte verificada. Porque uma citação falsa continua falsa mesmo
          quando aparece em uma interface muito bonita.
        </p>
      </section>

      <footer className="site-footer container">
        <Brand />
        <p>Projeto open source em construção.</p>
      </footer>
    </main>
  );
}
