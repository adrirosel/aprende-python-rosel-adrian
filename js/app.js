window.addEventListener("load", function () {
  const lista = document.getElementById("lecciones");
  LECCIONES.forEach(function (l) {
    const li = document.createElement("li");
    li.innerHTML = "<strong>" + l.titulo + "</strong><span>" + l.resumen + "</span>";
    lista.appendChild(li);
  });
});
