const urlData = "https://mindhub-xj03.onrender.com/api/amazing";

function calcularPAsistencia(eventos) {
  let pAsistencia = [];
  eventos.forEach(evento => {
    if (evento.assistance != null) {
      let even = {};
      even.name = evento.name;
      even.ganancias = evento.assistance * evento.price;
      even.pAssistance = (evento.assistance / evento.capacity) * 100;
      even.assistance = evento.assistance;
      even.capacity = evento.capacity;
      even.date = evento.date;
      even.category = evento.category;
      pAsistencia.push(even);
    } else {
      let even = {};
      even.name = evento.name;
      even.ganancias = evento.estimate * evento.price;
      even.pAssistance = (evento.estimate / evento.capacity) * 100;
      even.date = evento.date;
      even.assistance = evento.estimate;
      even.capacity = evento.capacity;
      even.category = evento.category;
      pAsistencia.push(even);
    }
  });
  return pAsistencia;
}

function gananciasCategorias(eventos) {
  let categoriasFiltradas = [];
  let categorias = filtrarCategorias(eventos);
  categorias.forEach(categoria => {
    let todo = {};
    let gananciasTotales = 0;
    let asistenciasTotales = 0;
    let capacidadTotal = 0;
    eventos.forEach(evento => {
      if (categoria == evento.category) {
        gananciasTotales = evento.ganancias + gananciasTotales;
        asistenciasTotales = evento.assistance + asistenciasTotales;
        capacidadTotal = evento.capacity + capacidadTotal;
      }
    });
    todo.name = categoria;
    todo.ganancias = gananciasTotales;
    todo.capacidad = capacidadTotal;
    todo.asis = asistenciasTotales;
    todo.porcentaje = (asistenciasTotales / capacidadTotal) * 100;
    categoriasFiltradas.push(todo);
  });

  return categoriasFiltradas;
}


function ordenarMayorAMenor(eventos) {
  return eventos.sort((a, b) => b.pAssistance - a.pAssistance);
}

function ordenarMayorAMenorCapacity(eventos) {
  return eventos.sort((a, b) => b.capacity - a.capacity);
}

function crearTablas(eventos, capacidad, idContenedor) {
  let html = "";
  for (let i = 0; i < 3; i++) {
    html += `<tr>
                    <td>${eventos[i].name}</td>
                    <td>${eventos[eventos.length - (i + 1)].name}</td>
                    <td>${capacidad[i].name}</td>
                </tr>`;
  }
  document.getElementById(idContenedor).innerHTML = html;
}

function crearTablasCategory(eventos, idContenedor) {
  let html = "";
  eventos.forEach(evento => {
    html += `<tr>
                    <td>${evento.name}</td>
                    <td>$ ${evento.ganancias}</td>
                    <td>${Math.trunc(evento.porcentaje)} %</td>
                </tr>`;
  });
  document.getElementById(idContenedor).innerHTML = html;
}

async function ejecucion() {
  const data = await getDataEvents(urlData);
  const eventosPAsistencia = calcularPAsistencia(data.events);
  ordenarMayorAMenor(eventosPAsistencia);
  crearTablas(
    eventosPAsistencia,
    ordenarMayorAMenorCapacity(data.events),
    "asistencia"
  );
  crearTablasCategory(
    gananciasCategorias(
      filterByDate("pasado", data.currentDate, eventosPAsistencia)
    ),
    "ePasado"
  );
  crearTablasCategory(
    gananciasCategorias(
      filterByDate("futuro", data.currentDate, eventosPAsistencia)
    ),
    "eFuturo"
  );
}

ejecucion();
