import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;

function processaTexto(caminho) {
    const resultado = pegaArquivo(caminho[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processaTexto(caminho)