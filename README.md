# Projeto-Fintech-FIAP
# Fintech — Sistema de Controle Financeiro Pessoal

Projeto acadêmico desenvolvido na FIAP com o objetivo de projetar e implementar um sistema de gestão financeira pessoal completo, cobrindo desde a especificação de requisitos até o design de interfaces e modelagem de banco de dados.

---

## Sobre o projeto

O Fintech é uma aplicação web de controle financeiro pessoal que permite ao usuário registrar receitas e gastos, acompanhar o saldo em tempo real e receber alertas automáticos quando o saldo fica negativo. O sistema foi projetado com foco em clareza visual, hierarquia de informação e consistência de identidade visual.

---

## Funcionalidades

- **Cadastro e autenticação** — conta com e-mail único, senha mínima de 8 caracteres, bloqueio após 5 tentativas incorretas e sessão com expiração por inatividade de 30 minutos
- **Registro de receitas** — lançamento com valor, data, categoria (Salário, Freelance, Outros) e suporte a recorrência mensal ou semanal
- **Registro de gastos** — despesas com valor, data, categoria (Alimentação, Transporte, Lazer, Moradia, Saúde, Educação, Vestuário, Outros) e descrição opcional
- **Painel financeiro** — saldo atual, total de receitas e gastos do mês, gráfico de evolução mensal e distribuição por categoria
- **Alertas de saldo baixo** — notificação automática disparada quando o saldo do usuário fica negativo

---

## Entregas do projeto

### Requisitos ágeis
Backlog do MVP com 5 user stories (US01–US05), critérios de aceitação, validação INVEST e priorização justificada.

### Modelagem UML
Diagrama de contexto e diagrama de casos de uso com 6 casos (UC01–UC06), incluindo documentação descritiva completa do UC03 com fluxo principal, fluxos alternativos, fluxos de exceção e cenários de teste.

### Design de interfaces
5 telas desktop (1440×900px) no Figma com aplicação de hierarquia visual e Leis da Gestalt.

| Tela | Descrição |
|---|---|
| Cadastro | Formulário com barra de progresso e indicador de força de senha |
| Login | Estado de erro com contador de tentativas restantes |
| Painel financeiro | Cards de métricas, gráfico de barras e gráfico de rosca |
| Registrar receita | Formulário com prévia em tempo real e campo de recorrência |
| Registrar gasto | Grade de categorias com barras de orçamento mensal |

### Modelagem de banco de dados
Modelo lógico (ERD com entidades, atributos e cardinalidades) e modelo físico em SQL (PostgreSQL) com normalização até 3FN, constraints, índices e seed de dados realista.

### Front-end web
Painel Financeiro implementado em HTML e CSS com Tailwind CSS, responsivo para desktop e mobile.

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Design | Figma |
| Front-end | HTML5, CSS3, Tailwind CSS v3 |
| Banco de dados | PostgreSQL |
| Tipografia | DM Sans + DM Serif Display |
| Versionamento | Git + GitHub |

---

## Identidade visual

| Token | Valor |
|---|---|
| Fundo | `#F0EDE6` |
| Sidebar | `#0D1117` |
| Cor primária | `#3D6B5A` |
| Acento dourado | `#C9A84C` |
| Alerta/perigo | `#B03A2E` |
| Display | DM Serif Display |
| Corpo | DM Sans |

---

## Estrutura do repositório
