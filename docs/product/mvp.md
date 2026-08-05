# Escopo do MVP

## Objetivo da primeira versão

Validar se estudantes conseguem transformar uma área de interesse em um pré-projeto coerente e um plano de execução utilizável com apoio do TCC Flow.

## Jornada coberta

```text
Cadastro
  → criação do projeto
  → definição do contexto acadêmico
  → análise do tema
  → delimitação
  → problema de pesquisa
  → objetivos
  → justificativa
  → metodologia inicial
  → pré-projeto editável
  → cronograma
  → dashboard de progresso
```

## Funcionalidades obrigatórias

### 1. Autenticação

- cadastro por e-mail;
- login;
- recuperação de acesso;
- edição básica do perfil.

### 2. Projetos acadêmicos

- criar, editar, arquivar e duplicar projeto;
- informar curso, instituição e nível acadêmico;
- informar tipo de trabalho;
- definir prazo final;
- registrar norma de citação;
- registrar orientador, quando houver.

### 3. Assistente de tema

- receber área de interesse e tema inicial;
- detectar amplitude excessiva;
- sugerir recortes;
- indicar dificuldade e dependências;
- alertar quando o tema exige dados, participantes ou autorizações.

### 4. Construtor do pré-projeto

- título provisório;
- tema delimitado;
- problema de pesquisa;
- hipótese opcional;
- objetivo geral;
- objetivos específicos;
- justificativa;
- metodologia inicial;
- estrutura preliminar;
- exportação futura prevista, mas não obrigatória nesta fase.

### 5. Planejador

- gerar tarefas a partir do prazo;
- permitir ajuste manual;
- registrar status e prioridade;
- recalcular progresso;
- destacar atrasos e dependências.

### 6. Dashboard

- progresso geral;
- próxima tarefa;
- tarefas atrasadas;
- etapas concluídas;
- alertas de coerência;
- últimas decisões registradas.

### 7. Histórico da IA

- registrar pergunta, resposta e modo utilizado;
- permitir aceitar, rejeitar ou editar sugestões;
- preservar a versão anterior;
- identificar conteúdo sugerido pela IA.

## Fora do escopo da versão inicial

- editor completo de monografia;
- upload e leitura de PDFs;
- geração automática de referências ABNT;
- análise estatística;
- integração com bibliotecas acadêmicas;
- detector de plágio;
- colaboração com orientador;
- geração direta de apresentação;
- simulação de banca por voz;
- aplicativo móvel nativo;
- execução de pesquisa em nome do estudante.

## Critérios de aceite

O MVP será considerado funcional quando um estudante puder:

1. criar um projeto;
2. preencher o contexto acadêmico;
3. receber análise e recortes de tema;
4. montar um pré-projeto coerente;
5. editar todas as sugestões;
6. gerar um plano de tarefas baseado no prazo;
7. visualizar progresso e pendências;
8. consultar o histórico das decisões tomadas.

## Riscos do MVP

- respostas genéricas da IA;
- excesso de texto em vez de orientação;
- cronogramas irreais;
- geração de termos metodológicos sem explicação;
- dependência excessiva do estudante;
- custo de contexto e chamadas ao modelo;
- armazenamento indevido de dados acadêmicos.

## Hipótese de produto

Estudantes que recebem orientação contextual por etapas conseguem criar um pré-projeto mais coerente e um plano de execução mais claro do que estudantes que utilizam apenas um chat genérico.
