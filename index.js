import fs from 'fs';
import chalk from "chalk";

function trataErro(erro){
    console.log(erro);  //imprime no console o objeto erro, e me dá mais dados importantes do mesmo
    throw new Error(chalk.red(erro.code, 'Você fez caquinha'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
}
/*
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}
*/

pegaArquivo('./arquivos/texto.md');