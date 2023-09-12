let urlData = "https://mindhub-xj03.onrender.com/api/amazing";

let checkboxes = "";
let buscador = "";

async function datos() {
  data = await getDataEvents(urlData);
  crearTarjetas(data.events, "contenedorTarjetasHome");
  crearChekbox(filtrarCategorias(data.events), "filtro");

  buscador = document.getElementById("buscador");
  checkboxes = document.querySelectorAll(".checks");

  checkboxes.forEach((c) => {
    c.addEventListener("change", () => {
      aplicarFiltros(data.events, "contenedorTarjetasHome");
    });
  });

  buscador.addEventListener("input", () => {
    aplicarFiltros(data.events, "contenedorTarjetasHome");
  });
}

datos();
