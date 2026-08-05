# Wireframes do MVP

## Objetivo

Definir o fluxo visual mínimo do TCC Flow antes da implementação em Next.js.

O wireframe prioriza orientação, progresso e transparência sobre o papel da IA. O sistema não apresenta sugestões como conteúdo automaticamente aprovado pelo estudante.

## Fluxo principal

```text
Landing
  ↓
Dashboard
  ↓
Novo projeto
  ↓
Contexto acadêmico
  ↓
Tema e delimitação
  ↓
Problema e objetivos
  ↓
Pré-projeto consolidado
  ↓
Cronograma
```

## 1. Landing page

### Objetivo

Explicar rapidamente o produto e conduzir o visitante ao início da jornada.

### Blocos

- cabeçalho com marca e acesso;
- proposta de valor;
- demonstração das etapas;
- diferenciais de integridade acadêmica;
- chamada principal para criar projeto;
- aviso de que a IA orienta, mas não substitui a autoria.

### Ação principal

`Começar meu TCC`

## 2. Dashboard

### Objetivo

Mostrar o estado do trabalho e qual é a próxima ação recomendada.

### Componentes

- saudação e resumo;
- progresso geral;
- prazo final;
- próxima entrega;
- alertas acadêmicos;
- projetos ativos;
- ações rápidas;
- atividade recente.

### Regra de UX

A tela deve sempre indicar uma próxima ação clara. O estudante não deveria entrar no sistema e receber apenas gráficos decorativos contemplando a própria ansiedade.

## 3. Novo projeto

### Etapas

1. curso e nível acadêmico;
2. instituição e norma;
3. tipo de TCC;
4. prazo final;
5. modalidade individual ou grupo;
6. tema inicial, quando existir.

### Estados

- vazio;
- preenchimento parcial;
- validação;
- salvamento;
- erro;
- conclusão.

## 4. Assistente de tema

### Estrutura

- contexto informado pelo estudante;
- lista de sugestões;
- avaliação de viabilidade;
- dificuldade estimada;
- necessidade de dados;
- riscos de escopo;
- campo para editar o recorte;
- justificativa da recomendação.

### Distinções visuais

- conteúdo informado pelo estudante;
- sugestão da IA;
- alerta metodológico;
- decisão confirmada.

## 5. Construtor do pré-projeto

### Painel esquerdo

Etapas e estado de conclusão:

- tema;
- delimitação;
- problema;
- hipótese;
- objetivo geral;
- objetivos específicos;
- justificativa;
- metodologia inicial.

### Painel central

Editor do item selecionado.

### Painel direito

Assistente com:

- explicação;
- sugestões;
- incoerências;
- impacto sobre outros itens;
- confirmação explícita.

## 6. Pré-projeto consolidado

### Objetivo

Permitir leitura integral antes da aprovação.

### Componentes

- documento consolidado;
- índice de coerência;
- pendências;
- itens sem confirmação;
- histórico de alterações;
- exportação futura;
- botão de aprovação do estudante.

## 7. Planejamento

### Componentes

- cronograma por semanas;
- dependências;
- tarefas atrasadas;
- ajuste manual;
- próxima ação;
- previsão de conclusão;
- progresso por etapa.

## Navegação do ambiente do projeto

```text
Visão geral
Jornada
Pré-projeto
Estrutura
Capítulos
Fontes
Metodologia
Resultados
Auditoria
Apresentação
Banca virtual
Configurações
```

No MVP, apenas `Visão geral`, `Jornada`, `Pré-projeto` e `Planejamento` precisam estar funcionais.

## Requisitos responsivos

### Desktop

- navegação lateral;
- conteúdo central;
- painel contextual da IA.

### Tablet

- navegação recolhível;
- painel da IA como gaveta lateral.

### Celular

- navegação inferior ou menu;
- uma coluna;
- assistente da IA aberto em tela dedicada;
- ações primárias fixadas quando necessário.

## Acessibilidade

- contraste mínimo compatível com WCAG AA;
- navegação por teclado;
- foco visível;
- campos com rótulos reais;
- erros explicados em texto;
- ícones acompanhados de rótulos;
- progresso não representado apenas por cor.

## Critérios de aceite desta etapa

- fluxo do cadastro ao cronograma documentado;
- protótipo navegável disponível em `prototype/index.html`;
- estados de IA e autoria visualmente distintos;
- comportamento responsivo previsto;
- próxima ação claramente indicada em cada tela;
- base pronta para conversão em componentes React.