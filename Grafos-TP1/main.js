//script main.js
var texto;

$(document).ready(function () {
    $('.modal').modal();
});


window.onload = function () {
    //Check the support for the File API support
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var fileSelected = document.getElementById('txtfiletoread');
        fileSelected.addEventListener('change', function (e) {
            //Set the extension for the file
            var fileExtension = /text.*/;
            //Get the file object
            var fileTobeRead = fileSelected.files[0];
            console.log(fileSelected.files);
            //Check of the extension match
            if (fileTobeRead.type.match(fileExtension)) {
                //Initialize the FileReader object to read the 2file
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    var fileContents = document.getElementById('filecontents');
                    fileContents.innerText = '  nome do arquivo: ' + fileTobeRead.name +
                        ';  tipo do arquivo: ' + fileTobeRead.type +
                        ';  tamanho do arquivo: ' + fileTobeRead.size + ' bytes'
                        texto = fileReader.result;
                        // console.log(texto);
                    }
                fileReader.readAsText(fileTobeRead);
            }
            else {
                alert("Por favor selecione arquivo texto");
            }

        }, false);
    }
    else {
        alert("Arquivo(s) não suportado(s)");
    }
}


function matrizAdj() {

    var qtvert = parseInt(texto.charAt(3));

    if(texto.charAt(0) == '0') { //Grafo
        var matriz = new Array(qtvert);
        matriz.fill(0, 0, qtvert);
        for(let val in matriz){
            matriz[val] = new Array(qtvert);
        }

        for(var i = 4; i < texto.length; i = i + 2) {
            // console.log(texto.charAt(i));
        }
    } else if(texto.charAt(0) == '1') {  //Digrafo

    } else return error;


}


function trim(vlr) {
    return vlr.replace("\n","");
}