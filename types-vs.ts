// Type Alias

// Definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// Intersection
type GameCollectionT = Game & DLCT;

// Implements
class CreatGameT implements GameCollectionT{};

// Declarar Função
type getSimilarsT = (title: string) => void;

// ======== Diferenças ======== //

// Permite declarar tipos primitivos
type IDT = string | number;

// Pode declarar tuplas normalmente
type TupleT = [number, number];

[1, 2] as TupleT;

// Apenas uma declaração por escopo
type JQueryT = { a: string };
type JQueryT = { b: string };

// Mais recomendado na maioria das vezes
// Utilizando React - Props