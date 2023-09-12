function filtrarCategorias(eventos) {
  let categoriasSimple = [];
  eventos.forEach((evento) => {
    if (!categoriasSimple.includes(evento.category)) {
      categoriasSimple.push(evento.category);
    }
  });
  return categoriasSimple;
}

function crearChekbox(categorias, idContenedor) {
  for (categoria of categorias) {
    let cSwitch = `<div class="form-check form-switch">
                    <input class="form-check-input checks" type="checkbox" role="switch" value="${categoria}" id="${categoria}">
                    <label class="form-check-label" for="flexSwitchCheckDefault">${categoria}</label>
                    </div>`;

    document.getElementById(idContenedor).innerHTML += cSwitch;
  }
}

function sinResultado(value) {
  let mensaje = "";
  if (value == true) {
    mensaje = `<h3>No se encontraron resultados</h3>`;
  }
  document.getElementById("tarjeta0").innerHTML = mensaje;
}

function aplicarFiltros(eventos, idContenedor) {
  let filtrados = [];
  let busqueda = buscador.value;
  if (busqueda.length > 0) {
    filtrados = eventos.filter((ev) =>
      ev.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  } else {
    filtrados = eventos;
  }
  let chekeados = Array.from(checkboxes);
  chekeados = chekeados.filter((check) => check.checked).map((c) => c.value);
  if (chekeados.length > 0) {
    filtrados = filtrados.filter((c) => chekeados.includes(c.category));
  }
  if (filtrados.length <= 0) {
    sinResultado(true);
  } else {
    sinResultado(false);
  }
  crearTarjetas(filtrados, idContenedor);
}

function filterByDate(tiempo, currentDate, eventos) {
  let fechaActual = currentDate;

  if (tiempo == "pasado") {
    return eventos.filter((e) => e.date < fechaActual);
  } else if (tiempo == "futuro") {
    return eventos.filter((e) => e.date > fechaActual);
  }
}
