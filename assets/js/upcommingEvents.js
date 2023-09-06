crearChekbox(categorias, "filtro");

crearTarjetas(filterByDate("futuro"), "contenedorTarjetasFuture");

let buscador = document.getElementById("buscador");
let checkboxes = document.querySelectorAll(".checks");

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    aplicarFiltros(filterByDate("futuro"), "contenedorTarjetasFuture");
  });
});

buscador.addEventListener("input", () => {
  aplicarFiltros(filterByDate("futuro"), "contenedorTarjetasFuture");
});
