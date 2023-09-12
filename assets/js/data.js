
async function getDataEvents(urlData){
    const respuesta = await fetch(urlData);
    const data = await respuesta.json()
    return data
}
