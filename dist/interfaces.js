"use strict";
var tlou = {
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
// Parametro sem o "readonly"
tlou.description = "New";
console.log(tlou.description);
// Parametro com o "readonly"
// tlou.genre = "New";
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Last Of Us - Left Behing",
    description: "You play as Ellie",
    genre: "Action",
    plataform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
