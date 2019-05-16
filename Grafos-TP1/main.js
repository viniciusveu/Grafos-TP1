//script main.js
var texto;
let $body;



$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('select').formSelect();
});



function execute(body) {

    $body = body;

    $(body).ready(function () {
        //console.log($('#ordem'));
    });

    $(document).ready(function () {
        M.updateTextFields();
        $('select').formSelect();
    });

}



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
// function trim(vlr) {
//     return vlr.replace("\n", "");
// }


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

