let pi = 3.14
let resposta = 42

console.log("A resposta é " + resposta + " e o pi é " + pi)

pi = 3.14159
resposta = 0

console.log(`O pi é ${pi} e a resposta é ${resposta}`)


let texto = "Texto para ser alterado via métodos String"
let textoMaiuscula = texto.toLocaleUpperCase()
let alterado = texto.substring(15, 23)
let charzinho = texto[3]
let troca = texto.replace("Texto", "String")


console.log(texto.length)

console.log(texto)
console.log(textoMaiuscula)
console.log(alterado)
console.log(charzinho)
console.log(troca)


const arranjo = ["Ferrari", "Maclaren", "Red Bull", "Willians", "Mercedes"]
const tamanho = arranjo.length
const italiana = arranjo.at(0)
const menosUma = arranjo.pop()
const maisUma = arranjo.push("Hass")
const concatena = arranjo.concat("Alpine")


console.log(arranjo)
console.log(tamanho)
console.log(italiana)
console.log(menosUma)
console.log(maisUma)
console.log(concatena)
console.log(arranjo)

const equipe1 = {
  nome: 'Ferrari',
  titulos: 16,
  pilotos: ['Leclerc', 'Hamilton'],
  estatisticas: {
    vitorias: 248,
    podios: 834,
    poles: 254
  }
}


const equipe2 = {
  nome: 'Mclaren',
  titulos: 9,
  pilotos: ['Norris', 'Piastry'],
  estatisticas: {
    vitorias: 201,
    podios: 551,
    poles: 173
  }
}

const equipe3 = {
  nome: 'Williams',
  titulos: 9,
  pilotos: ['Albon', 'Sainz'],
  estatisticas: {
    vitorias: 114,
    podios: 313,
    poles: 125
  }
}


const mclaren1988 = {
    equipe: "McLaren",
    ano: 1988,
    pilotos: ["Ayrton Senna", "Alain Prost"],
    vitorias: 15
};

console.log(mclaren1988);

const mclarenJSON = JSON.stringify(mclaren1988, null, 2);
console.log(mclarenJSON);




const equipes = [equipe1, equipe2, equipe3];

console.log("=== Usando for ===");
for (let i = 0; i < equipes.length; i++) {
  console.log(equipes[i].nome);
}

console.log("\n=== Usando while ===");
let i = 0;
while (i < equipes.length) {
  console.log(equipes[i].nome);
  i++;
}

console.log("\n=== Usando for...of ===");
for (const equipe of equipes) {
  console.log(equipe.nome);
}


// Array com todas as equipes da F1 em 2025
const equipesF1_2025 = [
  "Ferrari",
  "Mercedes",
  "Red Bull",
  "McLaren",
  "Aston Martin",
  "Alpine",
  "Williams",
  "RB (Visa Cash App RB)",
  "Sauber (Stake F1 Team)",
  "Haas"
];

// Novo array vazio
const copiaEquipes = [];

// Percorre com forEach e insere no novo array
equipesF1_2025.forEach(equipe => {
  copiaEquipes.push(equipe);
});

// Mostra os dois arrays
console.log("Equipes originais:", equipesF1_2025);
console.log("Cópia preenchida:", copiaEquipes);


const primos = [2, 3, 5, 7, 11, 13]

const dobradosFuncao = primos.map(function (valor) {
  return valor * 2;
});

console.log("função completa:", dobradosFuncao);


const dobradosArrow = primos.map(valor => valor * 2);
console.log("arrow function:", dobradosArrow);


const musicos = [
  { nome: "John", sobrenome: "Lennon" },
  { nome: "Paul", sobrenome: "McCartney" },
  { nome: "George", sobrenome: "Harrison" },
  { nome: "Ringo", sobrenome: "Starr" },
  { nome: "Johnny", sobrenome: "Ramone" },
  { nome: "Joey", sobrenome: "Ramone" },
  { nome: "Marky", sobrenome: "Ramone" },
  { nome: "Dee Dee", sobrenome: "Ramone" }
];


const nomesCompletos = musicos.map(pessoa => 
  pessoa.nome.concat(" ", pessoa.sobrenome)
);

console.log("Todos os músicos:", nomesCompletos);

const ramones = nomesCompletos.filter(nome => nome.endsWith("Ramone"));
console.log("Ramones:", ramones);