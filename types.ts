// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message: `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff000

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, boolean]
title = [1, 'foo', true]

// enum
enum Colors{
  white = '#fff',
  black = '#000'
}

// any (qualquer tipo)
let coisa: any
coisa = true
coisa = 1
coisa = "foo"
coisa = [1]

// void (retorno vazio)
function logger(): void {
  console.log('foo')
}

// null | undefined
type bla = string | undefined

// never 
function error(): never {
  throw new Error("error");
}

// object
let cart: object

cart = {
  key: "foo"
}

// Type Inference
let otherMessage = "mensagem definida";
otherMessage = "nova string";

window.addEventListener("click", (e) => {
  console.log(e.target);
});