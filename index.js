console.log("Hola Mundo!");

const fetchMuseum = async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    const data = await response.json()

    return data
}

const logMuseum = async () => {
    const data = await fetchMuseum()
    console.log(data);
}

logMuseum()