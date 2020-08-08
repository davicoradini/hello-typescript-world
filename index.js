"use strict";
var world = '🗺️';
var appDiv = document.getElementById('app');
var var1 = { user: { id: 1, name: "User" } };
var userId = var1 === null || var1 === void 0 ? void 0 : var1.user.id;
console.log("User id using Typescript 3.8 optional chaining: " + userId);
if (appDiv) {
    appDiv.innerHTML = "<h1>Hello " + world + "</h1>";
}
