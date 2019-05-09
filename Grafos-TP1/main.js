//script main.js
var texto;
let $body;

class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
    }

    // Functions to be implemented 
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Deu Ruim = vazio'
        }
        return this.items.shift();
    }
    // front() 
    isEmpty() {
        return this.items.length == 0;
    }
    // printQueue() 
}



$(document).ready(function () {
    $('.modal').modal();
});


// window.onload = function () {
//     //Check the support for the File API support
//     if (window.File && window.FileReader && window.FileList && window.Blob) {
//         var fileSelected = document.getElementById('txtfiletoread');
//         fileSelected.addEventListener('change', function (e) {
//             //Set the extension for the file
//             var fileExtension = /text.*/;
//             //Get the file object
//             var fileTobeRead = fileSelected.files[0];
//             console.log(fileSelected.files);
//             //Check of the extension match
//             if (fileTobeRead.type.match(fileExtension)) {
//                 //Initialize the FileReader object to read the 2file
//                 var fileReader = new FileReader();
//                 fileReader.onload = function (e) {
//                     var fileContents = document.getElementById('filecontents');
//                     fileContents.innerText = '  nome do arquivo: ' + fileTobeRead.name +
//                         ';  tipo do arquivo: ' + fileTobeRead.type +
//                         ';  tamanho do arquivo: ' + fileTobeRead.size + ' bytes'
//                     texto = fileReader.result;
//                     // console.log(texto);
//                 }
//                 fileReader.readAsText(fileTobeRead);
//             }
//             else {
//                 alert("Por favor selecione arquivo texto");
//             }

//         }, false);
//     }
//     else {
//         alert("Arquivo(s) não suportado(s)");
//     }
// }

function trim(vlr) {
    return vlr.replace("\n", "");
}

function execute(body) {

    $body = body;

    $(body).ready(function () {
        console.log($('#ordem'));
    });



}

function bfs(grafo) { //pedir raiz
    let raiz = prompt("Entre com o vértice raíz: ");
    let cor = [];
    let d = [];
    let pi = [];
    for (let i = 0; i < grafo.length; i++) {
        if (i != raiz) {
            cor[i] = 'BRANCO';
            d[i] = Number.MAX_SAFE_INTEGER;
            pi[i] = null;
        }
    }
    cor[raiz] = 'CINZA';
    d[raiz] = 0;
    pi[raiz] = null;

    let fila = new Queue();
    fila.enqueue(raiz);
    while (!fila.isEmpty()) {
        let u = fila.dequeue();
        for (let v = 0; v < grafo.length; v++) {
            if (grafo[u][v] != 0) {
                if (cor[v] == 'BRANCO') {
                    cor[v] = 'CINZA';
                    d[v] = d[u] + 1;
                    pi[v] = u;
                    fila.enqueue(v);
                }
            }
        }
        cor[u] = 'PRETO';

    }
    let largura = "Ordem: ";
    for (let i = 0; i < grafo.length; i++) {
        largura += raiz + " -> " + i + " = " + d[i] + "  ||  ";
    }
    let $link = $('#largura');
    $link.text(largura);
}

function dfs(grafo) {
    let ordEncontro = [];
    let ordCinza = [];
    let cor = [];
    let d = [];
    let f = [];
    for (let u = 0; u < grafo.length; u++) {
        cor[u] = "BRANCO";
    }
    let tempo = 0;
    for (let u = 0; u < grafo.length; u++) {
        if (cor[u] == "BRANCO") {
            dfs_visit(u, f, d, cor, tempo, grafo, ordEncontro, ordCinza);
        }
    }
    let ordem = "Ordem Cinza: " + ordCinza;
    let $link = $('#ordemCinza');
    $link.text(ordem);
    ordem = "Ordem preto: " + ordEncontro;
    $link = $('#ordem');
    $link.text(ordem);

}

function dfs_visit(u, f, d, cor, tempo, grafo, ordEncontro, ordCinza) {
    cor[u] = "CINZA";
    ordCinza.push(u);
    tempo++;
    d[u] = tempo;
    for (let v = 0; v < grafo.length; v++) {
        if (grafo[u][v] != 0) {
            if (cor[v] == 'BRANCO') {
                dfs_visit(v, f, d, cor, tempo, grafo, ordEncontro, ordCinza);
            }
        }
    }
    cor[u] = "PRETO";
    f[u] = tempo++;
    ordEncontro.unshift(u);


}
// function matrizAdj() {

//     var qtvert = parseInt(texto.charAt(3));

//     if (texto.charAt(0) == '0') { //Grafo
//         var matriz = [qtvert];
//         var v1, v2, peso;
//         var u1, u2, peso1;
//         matriz.fill(0, 0, qtvert);
//         for (let val in matriz) {
//             matriz[val] = [qtvert];
//             matriz[val].fill(0, 0, qtvert);
//         }
//         console.log(texto);
//         var i = 6;

//         while (i < texto.length) {
//             while (texto.charAt(i) != ' ') {
//                 v1 = v1 + texto.charAt(i);
//                 i++;
//             } i++;
//             while (texto.charAt(i) != ' ') {
//                 v2 = v2 + texto.charAt(i);
//                 i++;
//             } i++;
//             while (texto.charAt(i) != '\n') {
//                 peso = peso + texto.charAt(i);
//                 i++;
//             } i++;

//             u1 = parseInt(v1);

//             u2 = parseInt(v2);
//             peso1 = parseInt(peso);
//             matriz[u1][u2] = peso1;

//         }
//         console.log(matriz);
//     }
//     else if (texto.charAt(0) == '1') {  //Digrafo

//     } else return error;


// }


//JSON

// function getJson() {
//     var jqxhr = $.getJSON("grafo.json", function (data) {
//         console.log("Pegamo o grafo");
//     })
//         .done(function (data) {
//             criarMatriz(data);

//         })
//         .fail(function () {
//             console.log("Não deu para achar o grafo, malz");
//         });
// }

// function criarMatriz(data){
//     const qnt = data.qnt;
//     const pesos = [];
//     let max = [];
//     for (let i = 0; i < (qnt*qnt); i++) {
//         max[i] = 0;
//     }
//     for (let i = 0; i < qnt; i++) {
//         let v1 = data.conteudo[i][0];
//         let v2 = data.conteudo[i][1];
//         let v3 = data.conteudo[i][2];
//         max[v1][v2] = 1;
//         if(data.grafo){
//             max[v2][v1] = 1;
//         }
//         pesos.push(v3);
//     }
//     console.log(max);   
// }

