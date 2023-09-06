crearChekbox(categorias, "filtro");

crearTarjetas(filterByDate("pasado"), "contenedorTarjetasPast");

let buscador = document.getElementById("buscador");
let checkboxes = document.querySelectorAll(".checks");

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    aplicarFiltros(filterByDate("pasado"), "contenedorTarjetasPast");
  });
});

buscador.addEventListener("input", () => {
  aplicarFiltros(filterByDate("pasado"), "contenedorTarjetasPast");
});
