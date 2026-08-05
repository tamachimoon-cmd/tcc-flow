# Arquitetura Inicial

## Objetivos arquiteturais

A arquitetura do TCC Flow deve priorizar:

- desenvolvimento rápido do MVP;
- separação clara entre produto, regras acadêmicas e inteligência artificial;
- baixo acoplamento com um único provedor de IA;
- rastreabilidade das decisões;
- segurança de documentos acadêmicos;
- possibilidade de evolução sem microsserviços prematuros.

## Estratégia

A primeira versão utilizará um **monólito modular**. A aplicação permanece simples para operar, mas os domínios internos são separados desde o início.

```text
Navegador
   ↓
Aplicação Next.js
   ├── Interface do usuário
   ├── API e regras de negócio
   ├── Autenticação
   ├── Projetos acadêmicos
   ├── Planejamento
   ├── Auditoria
   └── Orquestração de IA
           ↓
      PostgreSQL
           ↓
 Armazenamento de arquivos
           ↓
 Provedores de IA
```

## Stack sugerida

### Aplicação

- Next.js;
- React;
- TypeScript;
- validação de dados com schemas tipados;
- componentes reutilizáveis;
- renderização responsiva.

### Banco de dados

- PostgreSQL;
- migrations versionadas;
- suporte a busca vetorial quando a biblioteca de fontes for implementada;
- auditoria de alterações em entidades críticas.

### Armazenamento

- serviço compatível com S3;
- URLs temporárias para documentos privados;
- separação entre arquivos originais e artefatos processados.

### Inteligência artificial

A camada de IA não será chamada diretamente pelos componentes da interface.

```text
Interface
   ↓
Serviço de aplicação
   ↓
Orquestrador de IA
   ├── seleção de modo
   ├── construção de contexto
   ├── política de segurança
   ├── validação da saída
   ├── registro de fontes
   └── escolha do provedor
```

## Módulos de domínio

### Identity

- usuários;
- autenticação;
- sessões;
- preferências;
- consentimentos.

### Projects

- contexto acadêmico;
- tema;
- problema;
- hipótese;
- objetivos;
- justificativa;
- metodologia inicial.

### Planning

- tarefas;
- prazos;
- dependências;
- progresso;
- alertas.

### Academic Core

- regras de coerência;
- estruturas de pré-projeto;
- tipos de pesquisa;
- normas acadêmicas;
- validações.

### AI Orchestration

- prompts versionados;
- modos especializados;
- contexto do projeto;
- histórico;
- respostas estruturadas;
- controle de custo.

### Audit Trail

- versões;
- decisões;
- sugestões aceitas;
- sugestões rejeitadas;
- mudanças realizadas pela IA ou pelo usuário.

## Modos de IA do MVP

### Orientador

Ajuda a delimitar tema, formular problema e construir objetivos.

### Metodologista

Analisa compatibilidade entre pergunta, dados, procedimentos e objetivos.

### Revisor de coerência

Identifica contradições e lacunas estruturais.

No MVP, esses modos compartilham a mesma infraestrutura. Não serão agentes autônomos com memória e permissões independentes.

## Resposta estruturada

As respostas da IA devem utilizar contratos tipados sempre que possível.

Exemplo conceitual:

```json
{
  "assessment": "Tema excessivamente amplo",
  "risks": ["prazo incompatível", "dependência de dados"],
  "suggestions": [],
  "requires_user_decision": true
}
```

## Modelo de dados inicial

Entidades principais:

- User;
- Project;
- AcademicProfile;
- Objective;
- Task;
- Section;
- AIInteraction;
- Decision;
- DocumentVersion;
- AcademicAudit.

## Segurança

- senhas nunca armazenadas em texto puro;
- documentos privados por padrão;
- nenhum segredo em código ou repositório;
- isolamento lógico por usuário e projeto;
- validação de entrada em todas as APIs;
- registro de acesso a documentos;
- política de retenção e exclusão;
- dados enviados à IA limitados ao contexto necessário.

## Observabilidade

Registrar:

- latência das chamadas;
- custo estimado por operação;
- provedor e modelo utilizados;
- falhas de validação;
- respostas recusadas;
- quantidade de tokens;
- erros por etapa do fluxo.

O conteúdo acadêmico não deve aparecer em logs operacionais comuns.

## Decisões adiadas

- provedor de hospedagem;
- provedor principal de IA;
- biblioteca visual;
- autenticação específica;
- serviço definitivo de armazenamento;
- estratégia de cobrança;
- execução de modelos locais;
- arquitetura multi-instituição.
