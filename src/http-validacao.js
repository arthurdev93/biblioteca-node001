function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => String(Object.values(objetoLink)))  //aqui prof usou join()
}

export default function listaValidada (listaDeLinks) {
    return extraiLinks(listaDeLinks);
}