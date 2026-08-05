# Conceito Inicial de Interface

## Direção visual

O TCC Flow deve transmitir organização, progresso, tecnologia e confiança acadêmica. A interface não deverá imitar um editor de texto tradicional nem parecer apenas um chat com menu lateral.

## Princípios

- cada tela deve indicar a próxima ação;
- progresso deve ser visível sem dominar a interface;
- explicações acadêmicas devem estar disponíveis no contexto;
- sugestões da IA devem ser distinguíveis do texto aprovado pelo estudante;
- alertas devem informar impacto e caminho de correção;
- escrita longa exige contraste, largura e espaçamento confortáveis;
- nenhuma etapa importante deve depender apenas de cor.

## Identidade

### Paleta conceitual

- azul profundo: estrutura e confiança;
- violeta: recursos de inteligência artificial;
- ciano: progresso e ações principais;
- verde: validações concluídas;
- âmbar: atenção;
- vermelho: inconsistência crítica;
- tons neutros: leitura e superfícies.

Os valores definitivos serão escolhidos após testes de contraste e aplicação em protótipos.

### Tipografia

- fonte sem serifa para interface;
- títulos fortes e compactos;
- texto acadêmico com largura controlada;
- suporte a símbolos, fórmulas e caracteres internacionais;
- escala tipográfica consistente.

## Navegação do projeto

```text
Visão geral
Jornada
Pré-projeto
Planejamento
Estrutura
Fontes
Auditoria
Apresentação
Banca virtual
Configurações
```

No MVP, apenas Visão geral, Jornada, Pré-projeto e Planejamento estarão funcionais.

## Tela 1 — Entrada

Objetivo: explicar o produto sem prometer geração automática de TCC.

Elementos:

- frase principal;
- demonstração da jornada;
- benefícios;
- princípio de integridade;
- botão “Começar meu projeto”;
- acesso para usuário existente.

Mensagem principal:

> Do tema à banca, com orientação inteligente.

## Tela 2 — Dashboard geral

Elementos:

- projetos ativos;
- prazo mais próximo;
- progresso;
- última atividade;
- botão para criar projeto;
- alertas relevantes.

## Tela 3 — Novo projeto

Fluxo dividido em etapas curtas:

1. contexto acadêmico;
2. formato do trabalho;
3. prazo;
4. área de interesse;
5. material institucional;
6. revisão.

O usuário deve conseguir salvar e continuar depois.

## Tela 4 — Jornada do projeto

Apresenta etapas como uma linha de progresso:

```text
Contexto
  → Tema
  → Problema
  → Objetivos
  → Justificativa
  → Metodologia
  → Planejamento
```

Cada etapa exibe:

- estado;
- resumo;
- pendências;
- botão de continuar;
- impacto de alterações anteriores.

## Tela 5 — Assistente de tema

Layout sugerido:

```text
┌───────────────────────┬────────────────────────────┐
│ Dados do projeto      │ Diagnóstico da IA          │
│                       │                            │
│ Área de interesse     │ Avaliação                  │
│ Tema inicial          │ Riscos                     │
│ Prazo                 │ Recortes sugeridos         │
│ Tipo de trabalho      │ Decisão necessária         │
└───────────────────────┴────────────────────────────┘
```

A IA não substitui automaticamente o conteúdo. O estudante escolhe uma sugestão ou edita a própria versão.

## Tela 6 — Construtor do pré-projeto

Layout em três áreas:

```text
┌──────────────┬─────────────────────────┬──────────────────┐
│ Etapas       │ Conteúdo editável       │ Orientação       │
│              │                         │                  │
│ Tema         │ Campo principal         │ Explicação       │
│ Problema     │                         │ Alertas          │
│ Objetivos    │                         │ Coerência        │
│ Metodologia  │                         │ Sugestões        │
└──────────────┴─────────────────────────┴──────────────────┘
```

## Tela 7 — Planejamento

Visualizações:

- lista de tarefas;
- calendário;
- progresso por etapa;
- dependências;
- tarefas atrasadas;
- recomendação da próxima ação.

## Componentes iniciais

- AppShell;
- ProjectCard;
- ProgressIndicator;
- JourneyStep;
- AcademicField;
- AISuggestionCard;
- CoherenceAlert;
- TaskItem;
- DeadlineCard;
- DecisionHistory;
- EmptyState;
- ConfirmationDialog.

## Acessibilidade

- contraste compatível com WCAG;
- navegação por teclado;
- foco visível;
- rótulos associados aos campos;
- mensagens de erro específicas;
- suporte a leitores de tela;
- preferência de movimento reduzido;
- modo claro e escuro planejados, sem sacrificar legibilidade.
