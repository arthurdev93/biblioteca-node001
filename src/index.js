import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo';
}

function trataErro(erro){
    console.log(erro);  //imprime no console o objeto erro, e me dá mais dados importantes do mesmo
    throw new Error(chalk.red(erro.code, 'Você fez caquinha'));
}

// async e await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    }   catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }

}

export default pegaArquivo;