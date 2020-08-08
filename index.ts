const world = '🗺️';

const appDiv: HTMLElement | null = document.getElementById('app');

const var1 = { user: { id: 1, name: "User" } }
const userId = var1?.user.id;
console.log(`User id using Typescript 3.8 optional chaining: ${userId}`);

if (appDiv) {
    appDiv.innerHTML = `<h1>Hello ${world}</h1>`;
}