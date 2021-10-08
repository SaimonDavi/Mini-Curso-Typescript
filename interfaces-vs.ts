// Interfaces

// Definição
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// Interseção | Extend
interface GameCollection extends Game, DLC {}

// Implements 
class CreateGame implements GameCollection {}

//Declarar Função
interface getSimilars {
  (title: string): void;
}

// ======== Diferenças ======== //

interface ID extends number{}

// Não consegue definir Tuplas na interface
interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3, 4, "asdfg"] as Tuple;

// Pode ter múltiplas declarações e ele une de mesmo nome
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo",
};

// Vantagem: quando estiver crinado libs, prefira Interfaces, porque são mais extensíveis
// Criando objetos/classes (POO)