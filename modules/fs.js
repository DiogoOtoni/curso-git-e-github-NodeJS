const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/testee"), (error) => {
//     if (error) {
//         console.log("Erro: ", error);
//     }
//     console.log("pasta criada com sucesso!");
// });

// criar um arquivo ou modifica por completo
fs.writeFile(
    path.join(__dirname, "/testee", "test.txt"), "hello node!", (error) => {
    if(error){
        return console.log("erro: ", error);
    }
    console.log("arquivo criado com sucesso");

    // adicionar a  um arquivo
    fs.appendFile(
        path.join(__dirname, "/testee", "test.txt"), " hell world!", (error) => {
        if(error){
            return console.log("erro: ", error);
        }
        console.log("modificado!");
    });

    //  ler arquivo
    fs.readFile(
        path.join(__dirname, "/testee", "test.txt"), "utf8", (error, data) => {
        if (error){
            return console.log("erro: ", error);
        }
        console.log(data);
    });


});

