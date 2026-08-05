# TCC Flow Web

Aplicação web do TCC Flow construída com Next.js, React e TypeScript.

## Requisitos

- Node.js 22 ou superior;
- npm 10 ou superior.

## Execução

Na raiz do repositório:

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

## Rotas iniciais

- `/` — landing page;
- `/dashboard` — visão geral do projeto;
- `/projetos/novo` — criação do contexto acadêmico;
- `/projetos/demo/tema` — assistente de tema;
- `/projetos/demo/pre-projeto` — editor e auditoria inicial.

## Estado atual

Esta fase implementa a fundação visual e navegável. Os dados ainda são locais e demonstrativos. Autenticação, persistência, banco de dados e conexão com provedores de IA pertencem às próximas fases.
