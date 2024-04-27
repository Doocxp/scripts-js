const nome = "Luiz";
const idade = 2024-2004;
const cidadeDeNascimento = "Guarujá";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

// console.log(apresentacao)

const nome2 = "Leo";
const idade2 = 12;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)