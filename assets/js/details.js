let urlData = "https://mindhub-xj03.onrender.com/api/amazing";

function crearCardDetail(evento, contenedor) {
  contenedor.innerHTML = `
                            <div class="card mb-3 col-xl-8 col-md-10">
                                <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
                                <div class="card-body">
                                <h5 class="card-title">${evento.name}</h5>
                                <p class="card-text">${evento.description}</p>
                                <p class="card-text">Place: ${evento.place}</p>
                                <p class="card-text">Capacity: ${evento.capacity}</p>
                                <p class="card-text">Price: $ ${evento.price}</p>
                                <p class="card-text">Date: ${evento.date}</p>
                                </div>
                            </div>`;
}

async function crearDetails(){
    data = await getDataEvents(urlData);
    const conteinerCards = document.getElementById("details");
    const querySearch = document.location.search;
    const id = new URLSearchParams(querySearch).get("id");
    const eventoMostar = data.events.find((evento) => evento._id == id);
    crearCardDetail(eventoMostar,conteinerCards)
}

crearDetails()