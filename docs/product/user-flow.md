# Fluxo Principal do Usuário

## 1. Entrada

O usuário cria uma conta ou acessa uma conta existente.

### Dados mínimos

- nome;
- e-mail;
- senha ou provedor de autenticação;
- aceite dos termos de uso e integridade acadêmica.

## 2. Criação do projeto

O usuário informa:

- nome provisório do projeto;
- curso;
- instituição;
- nível acadêmico;
- tipo de trabalho;
- prazo final;
- norma de citação;
- orientador, quando houver;
- área de interesse;
- tema inicial, quando existir.

## 3. Diagnóstico do tema

A IA avalia:

- clareza;
- amplitude;
- viabilidade;
- necessidade de dados;
- necessidade de participantes;
- dependência de autorização institucional;
- grau de dificuldade;
- compatibilidade com o prazo.

### Saída esperada

- diagnóstico objetivo;
- riscos;
- até três recortes sugeridos;
- explicação de cada recorte;
- recomendação principal.

O usuário pode aceitar, editar ou rejeitar qualquer sugestão.

## 4. Construção do pré-projeto

A plataforma conduz o usuário em etapas separadas:

1. título provisório;
2. tema delimitado;
3. problema de pesquisa;
4. hipótese, quando aplicável;
5. objetivo geral;
6. objetivos específicos;
7. justificativa;
8. metodologia inicial;
9. estrutura preliminar.

Cada etapa possui:

- explicação do conceito;
- exemplo;
- campo editável;
- análise da IA;
- alerta de inconsistência;
- botão de aprovação.

## 5. Validação de coerência

Antes de concluir o pré-projeto, o sistema verifica:

- se o problema pode ser respondido;
- se o objetivo geral responde ao problema;
- se os objetivos específicos conduzem ao objetivo geral;
- se a metodologia permite alcançar os objetivos;
- se a justificativa demonstra relevância;
- se o escopo cabe no prazo.

## 6. Planejamento

Com base no prazo, no tipo de trabalho e nas etapas exigidas, o sistema gera tarefas.

Cada tarefa contém:

- título;
- descrição;
- data prevista;
- prioridade;
- dependências;
- etapa acadêmica;
- estado atual.

Estados iniciais:

```text
Pendente
Em andamento
Bloqueada
Em revisão
Concluída
```

## 7. Dashboard

O dashboard apresenta:

- progresso geral;
- próxima ação recomendada;
- tarefas atrasadas;
- etapas concluídas;
- riscos acadêmicos;
- últimas sugestões aceitas;
- prazo restante;
- consistência atual do pré-projeto.

## 8. Revisão e continuidade

O usuário pode alterar qualquer decisão anterior. Mudanças relevantes disparam nova análise de impacto.

Exemplo:

> O problema de pesquisa foi alterado. Os objetivos e a metodologia precisam ser reavaliados.

## 9. Encerramento do fluxo do MVP

O usuário conclui a primeira jornada quando possui:

- pré-projeto aprovado por ele;
- estrutura inicial;
- cronograma;
- tarefas cadastradas;
- registro das principais decisões;
- relatório de coerência sem erros críticos.
