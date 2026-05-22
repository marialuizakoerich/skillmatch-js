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
