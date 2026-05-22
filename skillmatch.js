// ─────────────────────────────────────────────
//  CLASSE: Candidato (RF01 – Perfil do candidato)
// ─────────────────────────────────────────────
class Candidato {
  constructor(nome, area, habilidades, experienciaMeses) {
    this.nome = nome;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
  }
}

// ─────────────────────────────────────────────
//  CLASSE BASE: Vaga (RF09 – Criar uma classe)
// ─────────────────────────────────────────────
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

// ─────────────────────────────────────────────
// RF11 – Uso do this dentro de um método
// ─────────────────────────────────────────────
  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

// ─────────────────────────────────────────────
//  CLASSE FILHA: VagaFrontEnd (RF10 – Herança)
// ─────────────────────────────────────────────
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

// ─────────────────────────────────────────────
// RF11 – Uso do this dentro de um método
// ─────────────────────────────────────────────
  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

// ─────────────────────────────────────────────────
//  RF02 – Array de vagas fictícias
// ─────────────────────────────────────────────────
const vagas = [
  new VagaFrontEnd(
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "GitHub", "HTML"],
    2800,
    "Remoto",
    "Júnior"
  ),

  new VagaFrontEnd(
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "CSS"],
    1800,
    "Híbrido",
    "Estágio"
  ),

  new VagaFrontEnd(
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Júnior"
  ),

  new VagaFrontEnd(
    "DevHouse",
    "Front-End React Developer",
    ["JavaScript", "React", "CSS", "GitHub"],
    3500,
    "Remoto",
    "Júnior"
  ),

  new VagaFrontEnd(
    "PixelTech",
    "Assistente Front-End",
    ["HTML", "CSS", "Lógica de Programação", "React"],
    2200,
    "Híbrido",
    "Assistente"
  ),
];