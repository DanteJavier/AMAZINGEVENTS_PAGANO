// DOM selector
const conteinerCards = document.getElementById("details");
// Filtrado de tarjetas

// URLSearchParams
const querySearch = document.location.search;
const id = new URLSearchParams(querySearch).get("id");

//Creacion de la card
const eventoMostar = data.events.find((evento) => evento._id === id);

function crearCardDetail(evento, contenedor) {
  contenedor.innerHTML = `<div class="card mb-3">
                                <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${evento.image}" class="img-fluid rounded-start" alt="${evento.name}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title">${evento.name}</h5>
                                    <p class="card-text">${evento.description}</p>
                                    <p class="card-text">Place: ${evento.place}</p>
                                    <p class="card-text">Capacity: ${evento.capacity}</p>
                                    <p class="card-text">Price: $ ${evento.price}</p>
                                    <p class="card-text">Date: ${evento.date}</p>
                                    </div>
                                </div>
                                </div>
                            </div>`;
}

crearCardDetail(eventoMostar, conteinerCards);
