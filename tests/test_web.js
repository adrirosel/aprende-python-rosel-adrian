// Pruebas mínimas de la web estática. Ejecutar con: node tests/test_web.js
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");
assert.ok(html.includes("<title>Aprende Python de forma sencilla</title>"), "Falta el título de la página");
assert.ok(html.includes('id="lecciones"'), "Falta el contenedor de lecciones");

for (const f of ["css/estilos.css", "js/lecciones.js", "js/app.js"]) {
  assert.ok(fs.existsSync(f), "Falta el fichero " + f);
}

const lecciones = fs.readFileSync("js/lecciones.js", "utf8");
const n = (lecciones.match(/titulo:/g) || []).length;
assert.ok(n >= 5, "Debe haber al menos 5 lecciones (hay " + n + ")");

console.log("OK: todas las pruebas han pasado (" + n + " lecciones)");
