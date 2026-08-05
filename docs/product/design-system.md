# Base visual do TCC Flow

## Princípios

1. **Clareza antes de decoração** — a interface deve mostrar o que falta, por que falta e qual é a próxima ação.
2. **IA identificável** — conteúdo sugerido pela IA nunca deve parecer texto confirmado pelo estudante.
3. **Progresso compreensível** — porcentagens devem ser acompanhadas de etapas e pendências concretas.
4. **Leitura confortável** — o produto lidará com textos longos e precisa evitar densidade visual excessiva.
5. **Acessibilidade estrutural** — contraste, foco, rótulos, teclado e mensagens de erro fazem parte do produto, não de uma futura peregrinação técnica.

## Direção visual

A identidade mistura organização acadêmica e tecnologia sem recorrer aos clichês de capelos, diplomas enrolados e estudantes de banco de imagens sorrindo para uma planilha.

### Personalidade visual

- precisa;
- moderna;
- confiável;
- orientadora;
- sóbria sem parecer burocrática.

## Cores iniciais

| Token | Valor | Uso |
|---|---|---|
| `background` | `#08111F` | fundo principal escuro |
| `surface` | `#101C2D` | cartões e painéis |
| `surface-raised` | `#16243A` | elementos elevados |
| `border` | `#2A3A52` | divisores e contornos |
| `text` | `#F5F7FB` | texto principal |
| `text-muted` | `#AEB9C9` | texto secundário |
| `primary` | `#7C5CFF` | ações e identidade da IA |
| `accent` | `#3DD6D0` | progresso e orientação |
| `success` | `#39D98A` | confirmação |
| `warning` | `#F7B955` | pendências |
| `danger` | `#FF6B7A` | erro crítico |

Uma versão clara deverá ser criada durante a implementação do design system em componentes.

## Tipografia

### Interface

Fonte sem serifa, com boa legibilidade e suporte amplo a caracteres. Candidatas:

- Inter;
- Geist;
- Source Sans 3.

### Conteúdo acadêmico

O editor poderá oferecer uma visualização de documento com fonte serifada, sem alterar a fonte usada na interface.

## Escala de espaçamento

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64
```

## Bordas e elevação

- raio pequeno: `8px`;
- raio padrão: `12px`;
- raio de cartão: `18px`;
- sombras discretas, usadas apenas para hierarquia;
- evitar excesso de cartões aninhados.

## Estados de conteúdo

### Conteúdo do estudante

- fundo neutro;
- rótulo `Editado pelo estudante` quando necessário;
- histórico disponível.

### Sugestão da IA

- destaque violeta ou ciano;
- rótulo explícito `Sugestão da IA`;
- ações `Aplicar`, `Editar`, `Rejeitar`;
- nunca salva como decisão final sem confirmação.

### Informação extraída de fonte

- identificação da fonte;
- trecho ou localização;
- estado de verificação;
- distinção entre resumo e citação literal.

### Alerta acadêmico

- severidade;
- explicação;
- impacto;
- ação recomendada.

## Componentes iniciais

- `Button`;
- `Input`;
- `Textarea`;
- `Select`;
- `Card`;
- `Badge`;
- `Progress`;
- `Alert`;
- `Sidebar`;
- `Topbar`;
- `StepIndicator`;
- `AIMessage`;
- `SourceReference`;
- `AcademicStatus`;
- `DecisionActions`.

## Regras de microtexto

- usar verbos de ação;
- evitar jargões acadêmicos sem explicação;
- explicar o motivo do alerta;
- não prometer que a IA garante aprovação;
- não utilizar linguagem que sugira autoria automática;
- preferir `Confirmar problema` a `Finalizar etapa` quando a decisão precisa ser explícita.

## Responsividade

### Desktop

Navegação lateral, conteúdo central e assistente contextual.

### Tablet

Navegação recolhível e assistente em painel deslizante.

### Celular

Uma coluna, ações principais persistentes e IA em tela dedicada.

## Acessibilidade mínima

- WCAG AA;
- foco visível;
- navegação por teclado;
- campos com `label`;
- mensagens de erro associadas aos campos;
- texto alternativo para imagens;
- não depender apenas de cor para estados;
- respeito à preferência de redução de movimento.