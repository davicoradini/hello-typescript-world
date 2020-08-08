"use strict";
var world = '🗺️';
var appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML = "<h1>Hello " + world + "</h1>";
    console.log("hello " + world);
}
