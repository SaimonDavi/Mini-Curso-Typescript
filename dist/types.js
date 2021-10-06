"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message: "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff000;
// array (type[])
var items;
items = ["foo", "bar"];
var values;
values = [1, 2, 3];
// tuple
var title;
title = [1, 'foo', true];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer tipo)
var coisa;
coisa = true;
coisa = 1;
coisa = "foo";
coisa = [1];
// void (retorno vazio)
function logger() {
    console.log('foo');
}
// never 
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "foo"
};
// Type Inference
var otherMessage = "mensagem definida";
otherMessage = "nova string";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
