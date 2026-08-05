# TCC Flow

> **Do tema à banca, com orientação inteligente.**

O **TCC Flow** é uma plataforma de orientação acadêmica com inteligência artificial que acompanha estudantes durante todo o desenvolvimento do Trabalho de Conclusão de Curso.

A proposta não é produzir um trabalho completo no lugar do estudante. O sistema organiza o projeto, orienta decisões, analisa documentos, revisa coerência, controla fontes e prepara o aluno para defender aquilo que realmente desenvolveu.

## Problema

Estudantes frequentemente iniciam o TCC com temas amplos, cronogramas frágeis, fontes desorganizadas e pouca clareza sobre metodologia. Ferramentas genéricas de IA podem gerar texto, mas não acompanham a coerência do projeto completo e podem inventar referências ou apresentar informações não verificadas.

## Solução

```text
Criar projeto
  → definir e delimitar o tema
  → formular o problema de pesquisa
  → estabelecer objetivos
  → escolher a metodologia
  → organizar cronograma e fontes
  → desenvolver capítulos
  → executar auditoria acadêmica
  → preparar apresentação
  → simular a banca
```

## Aplicação Next.js

A aplicação web está em [`apps/web`](apps/web) e utiliza Next.js, React e TypeScript.

Rotas implementadas:

- `/` — landing page;
- `/dashboard` — visão geral do projeto;
- `/projetos/novo` — criação do contexto acadêmico;
- `/projetos/demo/tema` — assistente de tema;
- `/projetos/demo/pre-projeto` — editor e auditoria inicial.

Para executar:

```bash
npm install
npm run dev
```

Validação:

```bash
npm run typecheck
npm run lint
npm run build
```

## Protótipo anterior

O protótipo estático original continua disponível em [`prototype/index.html`](prototype/index.html) como referência histórica do fluxo inicial.

## Diferenciais

- orientação contextual baseada no projeto inteiro;
- análise de coerência entre problema, objetivos, metodologia, resultados e conclusão;
- biblioteca de fontes com estados de verificação;
- leitura do manual acadêmico da instituição;
- histórico de versões e participação da IA;
- alertas para afirmações sem evidência;
- preparação de apresentação e simulação de banca;
- princípios explícitos de integridade acadêmica.

## Escopo do MVP

1. criar uma conta e um projeto acadêmico;
2. informar curso, instituição, tipo de trabalho e prazo;
3. analisar e delimitar um tema;
4. construir problema, objetivos, justificativa e metodologia inicial;
5. gerar um pré-projeto editável;
6. criar um cronograma acadêmico;
7. acompanhar o progresso em um dashboard;
8. manter histórico das sugestões e decisões.

## Arquitetura

- **Aplicação:** Next.js e TypeScript;
- **Banco de dados planejado:** PostgreSQL;
- **Arquivos planejados:** armazenamento compatível com S3;
- **IA planejada:** camada de orquestração independente de provedor;
- **Estratégia:** monólito modular.

A arquitetura detalhada está em [`docs/architecture/overview.md`](docs/architecture/overview.md).

## Documentação

- [Visão do produto](docs/product/vision.md)
- [Escopo do MVP](docs/product/mvp.md)
- [Fluxo do usuário](docs/product/user-flow.md)
- [Wireframes](docs/product/wireframes.md)
- [Base visual](docs/product/design-system.md)
- [Conceito de interface](docs/product/ui-concept.md)
- [Arquitetura inicial](docs/architecture/overview.md)
- [Roadmap](docs/product/roadmap.md)
- [Integridade acadêmica](docs/governance/academic-integrity.md)

## Estado do projeto

**Fase:** fundação executável do MVP.

A aplicação Next.js possui rotas navegáveis, componentes interativos, design responsivo e validação automatizada por GitHub Actions. Os dados ainda são demonstrativos e locais; autenticação, persistência e integração real com IA pertencem às próximas fases.

## Princípio central

> A IA orienta, organiza e revisa. A pesquisa, as decisões e a responsabilidade acadêmica continuam pertencendo ao estudante.
