# SkillMatch JS ⚡
### Simulador de Compatibilidade com Vagas Front-End Júnior

> Projeto avaliativo do Módulo 01 — Semana 06 | M1S04 Mini-Projeto Avaliativo
> Curso Desenvolvedor(a) Front-End [React] · SC Tec / Senai SC · Turma 01

---

## 📌 Sobre o projeto

O **SkillMatch JS** é um motor de análise (engine) que compara o perfil técnico de uma candidata com os requisitos de vagas fictícias de front-end júnior.

A aplicação responde perguntas como:

- Quais habilidades a candidata já possui?
- Quais habilidades estão faltando para cada vaga?
- Qual é o percentual de compatibilidade com cada vaga?
- Qual vaga tem maior aderência ao perfil?
- O que a candidata deve priorizar nos estudos?

---

## 🎯 Objetivo

Praticar os conceitos do Módulo 01 em um projeto com contexto real:

| Categoria | Conceitos |
|---|---|
| **Lógica** | Condicionais, operadores, laços, escopo |
| **Funções** | Funções, arrow functions, callbacks, closures |
| **Arrays** | `map`, `filter`, `find`, `every`, `reduce` |
| **Objetos** | Objetos literais, chaves e valores |
| **POO** | Classes, construtores, herança, `this` |
| **Assíncrono** | Promises, `async/await` |
| **Versionamento** | GitHub, branches, commits semânticos |
| **Organização** | Kanban, GitFlow simplificado |

---

## 🗂️ Estrutura do projeto

```
skillmatch-js/
│
├── skillmatch.js          ← arquivo principal (roda no console)
├── README.md
└── planejamento/
    └── kanban.md          ← organização das tarefas e épicos do projeto
```

---

## 🚀 Como executar

Não é necessário instalar nada. Basta usar o console do navegador:

1. Abra o **Google Chrome**
2. Pressione **F12** para abrir o DevTools
3. Clique na aba **Console**
4. Copie todo o conteúdo do arquivo `skillmatch.js`
5. Cole no console e pressione **Enter**

O sistema exibirá automaticamente:
- Análise de compatibilidade com cada vaga
- Melhor vaga para o perfil
- Recomendação de estudos personalizada

---

## 🧱 Arquitetura do sistema

```
Candidato  ──┐
             ├──▶  Candidatura  ──▶  Console Output
Vagas[]    ──┘
```

### Classes

| Classe | Descrição |
|---|---|
| `Candidato` | Perfil da candidata (nome, área, habilidades, experiência) |
| `Vaga` | Classe base com dados da vaga e método `exibirResumo()` |
| `VagaFrontEnd` | Herda de `Vaga`, adiciona atributo `nivel` e método `exibirNivel()` |
| `Candidatura` | Centraliza toda a lógica de análise e exibição |

---

## 🔍 Funcionalidades implementadas

### Cálculo de compatibilidade
```
compatibilidade = habilidades atendidas / total de requisitos da vaga × 100
```

### Classificação por percentual
| Percentual | Classificação |
|---|---|
| 80% a 100% | ✅ Alta compatibilidade |
| 50% a 79% | 🟡 Média compatibilidade |
| 0% a 49% | 🔴 Baixa compatibilidade |

### Métodos de array utilizados
- `filter` — habilidades encontradas e faltantes
- `map` — gerar análise formatada de todas as vagas
- `includes` — verificar presença de habilidade

### Conceitos avançados
- **Closure** — `criarContadorVagasAnalisadas()` mantém `total` no escopo interno
- **Callback** — `finalizarAnalise(callback)` e `exibirResultadoFinal(callback)`
- **Promise** — `buscarVagasSimuladas()` simula latência de servidor
- **async/await** — `iniciarAnaliseAsync()` consome a Promise de forma legível

---

## 🌐 Como a internet funciona

A internet é uma rede global de computadores que se comunicam por meio de protocolos padronizados como o **HTTP/HTTPS**. Quando você acessa um site, seu navegador (cliente) envia uma **requisição** para um servidor, que processa e devolve uma **resposta** — geralmente HTML, CSS, JavaScript ou dados em JSON.

### Arquitetura cliente-servidor

```
  [ CLIENTE ]                    [ SERVIDOR ]
  Navegador   ── requisição ──▶  Processa
              ◀── resposta ───   Retorna dados
```

No SkillMatch JS, a função `buscarVagasSimuladas()` simula esse comportamento: ela retorna uma **Promise** com `setTimeout` de 1 segundo, imitando o tempo de resposta de uma API real. Em uma aplicação real, esse dado viria de uma chamada `fetch()` para um endpoint de backend.

---

## 🔧 Extensões utilizadas no VS Code

| Extensão | Finalidade |
|---|---|
| **ESLint** | Análise e padronização do código JavaScript |
| **Prettier** | Formatação automática do código |
| **GitLens** | Visualização de histórico e autoria no Git |

---

## 📋 Variáveis: let e const

O projeto utiliza `const` e `let`, seguindo as boas práticas do JavaScript moderno:

| Palavra-chave | Uso | Escopo |
|---|---|---|
| `const` | Valores que não serão reatribuídos | Bloco |
| `let` | Valores que podem mudar (ex: contadores) | Bloco |

---

## 🌿 Branches utilizadas

| Branch | Objetivo |
|---|---|
| `main` | Código estável — versão final entregue |
| `develop` | Integração das funcionalidades antes de ir para main |
| `feat/analise-vagas` | Implementação de toda a lógica do sistema |
| `docs/readme` | Criação e atualização da documentação |

**Fluxo:** `feat/analise-vagas` → `develop` → `main` · `docs/readme` → `develop` → `main`

---

## 📝 Commits realizados

```
feat: cria estrutura inicial do projeto
feat: adiciona classes Candidato, Vaga e VagaFrontEnd
feat: adiciona array de vagas
feat: adiciona objeto candidato e instância de Candidatura
feat: adiciona métodos identificarHabilidadesEncontradas e listarHabilidadesFaltantes
feat: adiciona cálculo de compatibilidade e classificação por percentual
feat: adiciona método para encontrar vaga com maior compatibilidade
feat: adiciona geração de recomendação de estudo
feat: adiciona closure e análise formatada das vagas
feat: adiciona métodos mostrarMelhorVaga e mostrarRecomendacaoEstudo
feat: adiciona closure criarContadorVagasAnalisadas e callbacks finalizarAnalise e exibirResultadoFinal
feat: adiciona Promise e async/await para simulação de carregamento
feat: adiciona função main para execução no console do navegador
fix: remove duplicação da análise na função main
docs: cria arquivo kanban com planejamento e épicos e do projeto
docs: adiciona descrição dos épicos e atividades do projeto no kanban.md
docs: cria README com objetivo, instruções e estrutura do projeto
docs: finaliza README com branches, commits e links
```

---

## 📦 Kanban

O planejamento das tarefas foi organizado em um quadro Kanban no **Jira** com as colunas:
**Backlog → A Fazer → Em Andamento → Concluído**

Os épicos criados foram:
- Estrutura Inicial do Projeto
- Modelagem de Dados
- Sistema de Compatibilidade
- Recursos Avançados JavaScript
- Finalização do Projeto

A descrição completa de cada épico e suas atividades está disponível em [`planejamento/kanban.md`](./planejamento/kanban.md).

🔗 Acesse o quadro: [Projeto-SkillMatch no Jira](https://marialk-senai-frontend.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNWM3ZjA2ZGJhYmU3NGU2NmI0MGJmMjg3YWRjMjdjN2YiLCJwIjoiaiJ9)

> O quadro está acessível publicamente via link.

---

## 🎬 Vídeo de apresentação

🔗 Link do vídeo: https://youtu.be/9AhwW4r2MWI

---

## 🔗 Links do projeto

- 📁 Repositório GitHub: [github.com/marialuizakoerich/skillmatch-js](https://github.com/marialuizakoerich/skillmatch-js)
- 📋 Quadro Kanban: [Projeto-SkillMatch no Jira](https://marialk-senai-frontend.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNWM3ZjA2ZGJhYmU3NGU2NmI0MGJmMjg3YWRjMjdjN2YiLCJwIjoiaiJ9)
- 🎬 Vídeo de apresentação: *em breve*

---

## 👩‍💻 Autora

**Maria Luiza**
Curso Desenvolvedor(a) Front-End [React] · SC Tec / Senai SC · Turma 01 · 2026


---
