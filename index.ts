const world = '🗺️';

const appDiv: HTMLElement | null = document.getElementById('app');

if (appDiv) {
    appDiv.innerHTML = `<h1>Hello ${world}</h1>`;
    console.log(`hello ${world}`);
}