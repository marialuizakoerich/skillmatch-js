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

// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//  CLASSE: Candidatura - Centraliza toda a lógica de análise: compatibilidade, habilidades, recomendação, callback, closure, Promise e async/await.
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
class Candidatura {
    constructor(candidato, vagas) {
        this.candidato = candidato;
        this.vagas = vagas;
  }

// ─────────────────────────────────────────────
// RF08 – Método de array: filter
// ─────────────────────────────────────────────
  identificarHabilidadesEncontradas(vaga) {
    return vaga.requisitos.filter((requisito) =>
      this.candidato.habilidades.includes(requisito)
    );
  }

// ─────────────────────────────────────────────────
// RF05 + RF08 – Habilidades faltantes usando filter
// ─────────────────────────────────────────────────
  listarHabilidadesFaltantes(vaga) {
    return vaga.requisitos.filter((requisito) =>
      !this.candidato.habilidades.includes(requisito)
    );
  }

  // ─────────────────────────────────────────────────
// RF03 – Calcular compatibilidade com cada vaga
// ─────────────────────────────────────────────────
  calcularPercentualCompatibilidade(vaga) {
    const habilidadesEncontradas =
      this.identificarHabilidadesEncontradas(vaga).length;
    const totalRequisitosVaga = vaga.requisitos.length;

    const compatibilidade = (habilidadesEncontradas / totalRequisitosVaga) * 100;

    return parseFloat(compatibilidade.toFixed(2));;
  }


// ───────────────────────────────────────────────
//RF04 – Classificar a compatibilidade
// ───────────────────────────────────────────────
  classificacaoCandidatoPorPercentual(vaga) {
    const compatibilidade = this.calcularPercentualCompatibilidade(vaga);

    if (compatibilidade <= 49) {
      return `O candidato possui baixa compatibilidade: ${compatibilidade}%`;
    } else if (compatibilidade <= 79) {
      return `O candidato possui média compatibilidade: ${compatibilidade}%`;
    } else {
      return `O candidato possui alta compatibilidade: ${compatibilidade}%`;
    }
  }

  // ─────────────────────────────────────────────────────────────────
// RF06 – Encontrar a vaga com maior compatibilidade
// ─────────────────────────────────────────────────────────────────
  encontrarVagaComMaiorCompatibilidade(vagas) {
    let melhorVaga = null;
    let maiorCompatibilidade = 0;

    for (const vaga of vagas) {
      const compatibilidade = this.calcularPercentualCompatibilidade(vaga);

      if (compatibilidade > maiorCompatibilidade) {
        maiorCompatibilidade = compatibilidade;
        melhorVaga = vaga;
      }
    }

    return melhorVaga;
  }

  // ───────────────────────────────────
// RF07 – Gerar recomendação de estudo
// ───────────────────────────────────
  gerarRecomendacaoEstudo() {
    const habilidadesFaltantes = [];

    for (const vaga of this.vagas) {
      const faltantes = this.listarHabilidadesFaltantes(vaga);

      for (const habilidade of faltantes) {
        if (!habilidadesFaltantes.includes(habilidade)) {
          habilidadesFaltantes.push(habilidade);
        }
      }
    }

    if (habilidadesFaltantes.length === 0) {
      return "Parabéns! O candidato atende todos os requisitos das vagas analisadas.";
    }

    return `Priorize estudar ${habilidadesFaltantes.join(", ")}, pois esses conteúdos aparecem nas vagas analisadas.`;
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
    "Júnior",
  ),

  new VagaFrontEnd(
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "CSS"],
    1800,
    "Híbrido",
    "Estágio",
  ),

  new VagaFrontEnd(
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Júnior",
  ),

  new VagaFrontEnd(
    "DevHouse",
    "Front-End React Developer",
    ["JavaScript", "React", "CSS", "GitHub"],
    3500,
    "Remoto",
    "Júnior",
  ),

  new VagaFrontEnd(
    "PixelTech",
    "Assistente Front-End",
    ["HTML", "CSS", "Lógica de Programação", "React"],
    2200,
    "Híbrido",
    "Assistente",
  ),
];

// ─────────────────────────────────────────────
//  RF01 – Criação do candidato
// ─────────────────────────────────────────────
const candidato = new Candidato(
  "Maria Luiza",
  "Front-End",
  ["Lógica de Programação", "React", "JavaScript", "HTML", "CSS", "GitHub"],
  8,
);

// ─────────────────────────────────────────────
// Criando a Candidatura
// ─────────────────────────────────────────────
const candidaturaTeste = new Candidatura(candidato, vagas);
