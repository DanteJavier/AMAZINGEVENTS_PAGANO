let urlData = "https://mindhub-xj03.onrender.com/api/amazing"
let eventos = []

let checkboxes = ""
let buscador = ""


async function datos(){
  data = await getDataEvents(urlData)
  console.log(data)
  crearTarjetas(filterByDate("futuro",data.currentDate,data.events), "contenedorTarjetas");
  crearChekbox(filtrarCategorias(data.events), "filtro");

  buscador = document.getElementById("buscador");
  checkboxes = document.querySelectorAll(".checks");

  checkboxes.forEach((c) => {
    c.addEventListener("change", () => {
      aplicarFiltros(filterByDate("futuro",data.currentDate,data.events), "contenedorTarjetas");
    });
  });
  
  buscador.addEventListener("input", () => {
    aplicarFiltros(filterByDate("futuro",data.currentDate,data.events), "contenedorTarjetas");
  });
  
}

datos()
