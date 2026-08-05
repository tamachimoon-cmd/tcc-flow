# TCC Flow

> **Do tema à banca, com orientação inteligente.**

O **TCC Flow** é uma plataforma de orientação acadêmica com inteligência artificial que acompanha estudantes durante todo o desenvolvimento do Trabalho de Conclusão de Curso.

A proposta não é produzir um trabalho completo no lugar do estudante. O sistema organiza o projeto, orienta decisões, analisa documentos, revisa coerência, controla fontes e prepara o aluno para defender aquilo que realmente desenvolveu.

## Problema

Estudantes frequentemente iniciam o TCC com temas amplos, cronogramas frágeis, fontes desorganizadas e pouca clareza sobre metodologia. Ferramentas genéricas de IA podem gerar texto, mas não acompanham a coerência do projeto completo e podem inventar referências ou apresentar informações não verificadas.

## Solução

O TCC Flow conduz o estudante por uma jornada estruturada:

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

## Protótipo navegável

O primeiro protótipo do fluxo principal está disponível em [`prototype/index.html`](prototype/index.html).

Ele demonstra:

- landing page;
- dashboard;
- criação de projeto;
- assistente de tema;
- construtor do pré-projeto;
- orientação contextual da IA;
- distinção entre sugestão automática e decisão confirmada pelo estudante.

Para executar localmente, consulte [`prototype/README.md`](prototype/README.md).

## Diferenciais

- orientação contextual baseada no projeto inteiro;
- análise de coerência entre problema, objetivos, metodologia, resultados e conclusão;
- biblioteca de fontes com estados de verificação;
- leitura do manual acadêmico da instituição;
- histórico de versões e participação da IA;
- alertas para afirmações sem evidência;
- preparação de apresentação e simulação de banca;
- princípios explícitos de integridade acadêmica.

## Público inicial

O MVP será direcionado ao **estudante**. Recursos para orientadores e instituições serão adicionados em fases posteriores.

## Escopo do MVP

A primeira versão deverá permitir:

1. criar uma conta e um projeto acadêmico;
2. informar curso, instituição, tipo de trabalho e prazo;
3. analisar e delimitar um tema;
4. construir problema, objetivos, justificativa e metodologia inicial;
5. gerar um pré-projeto editável;
6. criar um cronograma acadêmico;
7. acompanhar o progresso em um dashboard;
8. manter histórico das sugestões e decisões.

## Arquitetura proposta

- **Aplicação:** Next.js e TypeScript;
- **Banco de dados:** PostgreSQL;
- **Arquivos:** armazenamento compatível com S3;
- **IA:** camada de orquestração independente de provedor;
- **Busca semântica:** extensão vetorial no banco ou serviço dedicado;
- **Autenticação:** solução compatível com credenciais e provedores sociais.

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

**Fase:** prototipação do MVP.

A visão, o escopo, o fluxo principal, os wireframes e a base visual estão documentados. O próximo passo é converter o protótipo em uma aplicação Next.js com componentes reutilizáveis e persistência de dados.

## Princípio central

> A IA orienta, organiza e revisa. A pesquisa, as decisões e a responsabilidade acadêmica continuam pertencendo ao estudante.
