function crearTarjetas(eventos,idContenedor){
        let html = ""
        for(let evento of eventos){
            html += `<div class="col">
                            <div class="card">
                                <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${evento.name}</h5>
                                    <p class="card-text">${evento.description}</p>
                                    <p class="card-text">Precio $ ${evento.price}</p>
                                    <a href="./details.html?id=${evento._id}" class="btn btn-primary">Details</a>
                                </div>
                            </div>
                    </div>`;
        }
        document.getElementById(idContenedor).innerHTML = html;
    };