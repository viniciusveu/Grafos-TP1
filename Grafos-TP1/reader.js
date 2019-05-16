const createMatrizAdj = (array) => {
    let def = array[0];
    let size = array[1];
    let grafo = [];
    let index = 2
    while (index < array.length - 3) {
        let i = array[index];
        let j = array[index + 1];
        let peso = array[index + 2]
        console.log('i = ' + i);
        console.log('j = ' + j);
        console.log('peso = ' + peso);
        index += 3;
    }
}

const input = document.getElementById('txtToRead');
console.log(input);

input.addEventListener('change', (e) => {
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = () => {
        const lines = reader.result.split('\n').map((line) => { 
            return line.split(' ');
        });
        console.log(lines);
        
    }
    reader.readAsText(input.files[0]);
}, false);


/*
0
5
0 2 4
0 4 60
0 3 23
2 3 4
3 1 10
4 2 15
 */