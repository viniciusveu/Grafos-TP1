const readText = (id) =>{
    let string = $(id).val();
    let stringArray = [];
    let finalArray = [];
    for (let i = 0; i < string.length; i++)
        stringArray.push(string[i].trim()); //separou 60 em 6 e 0
    for (let i = 0; i < stringArray.length; i++){
        if(stringArray[i] != "") {
            finalArray.push(stringArray[i]); 
        }
    }
    console.log(finalArray);
    createMatrizAdj(finalArray);
}

const createMatrizAdj = (array) => {
    let def   = array[0];
    let size  = array[1];
    let grafo = [];
    let index = 2
    while(index < array.length - 3) {        
        let i    = array[index];
        let j    = array[index+1];
        let peso = array[index+2]
        console.log('i = ' + i);
        console.log('j = ' + j);
        console.log('peso = ' + peso);
        index += 3;
    }
}

/*
0
5
0 2 4
0 4 60
0 3 23
2 3 4
3 1 10
4 2 15
(24) [,, "0", "2", "4", "0", "4", "6", "0", "0", "3", "2", "3", "2", "3", "4", "3", "1", "1", "0", "4", "2", "1", "5"]
 */