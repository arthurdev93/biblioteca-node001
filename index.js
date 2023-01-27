import fs from 'fs';
import chalk from "chalk";

function trataErro(erro){
    console.log(erro);  //imprime no console o objeto erro, e me dá mais dados importantes do mesmo
    throw new Error(chalk.red(erro.code, 'Você fez caquinha'));
}

// async e await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto);
    }   catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }

}

// Promessas com then
/*
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
}
*/
pegaArquivo('./arquivos/texto.md');     //caminho esperado
pegaArquivo('./arquivos/');     //forço erro