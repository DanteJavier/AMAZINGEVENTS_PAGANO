crearChekbox(categorias, "filtro");

crearTarjetas(data.events, "contenedorTarjetasHome");

let buscador = document.getElementById("buscador");
let checkboxes = document.querySelectorAll(".checks");

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    aplicarFiltros(data.events, "contenedorTarjetasHome");
  });
});

buscador.addEventListener("input", () => {
  aplicarFiltros(data.events, "contenedorTarjetasHome");
});
