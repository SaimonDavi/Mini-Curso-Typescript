"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user);
}
logDetails(123, 'object');
logDetails('123', 'object');
logInfo(123, 'object');
logInfo('123', 'object');
function renderPlataform(plataform) {
    return plataform;
}
