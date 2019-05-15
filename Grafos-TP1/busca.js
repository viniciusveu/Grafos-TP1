

let tempo, cor = [];
let tempo_chegada = [];
let tempo_finalizacao = [];
let caminho = [];

class Busca {

    busca() {
        let x = document.getElementById("op").value;
        let u = document.getElementById("u").value;
        let v = document.getElementById("v").value;
        //let x = 0, u = 4, v =1;
        if (x == 0) this.caminhoDFS(grafo, u, v);
        else if (x == 1) this.bfs(grafo, u, v);
        else console.error();
    }

    caminhoDFS(grafo, u, v) {
        for (let x = 0; x < grafo.length; x++) {
            cor[x] = 'BRANCO';
        }

        this.dfs_visit(grafo, u, v);

    }


    chamarDFS(grafo) {
        let raiz = prompt("Entre com o vértice raíz para a DFS: ");
        //let raiz = 2;
        this.dfs(grafo, raiz);
        let txtDesc = " ", txtFin = " ";
        for (let i = 0; i < grafo.length; i++) {
            txtDesc = txtDesc + "O vértice " + i + " foi descoberto no instante " + tempo_chegada[i] + "<br>";
            txtFin = txtFin + "O vértice " + i + " foi finalizado no instante " + tempo_finalizacao[i] + "<br>";
        }
        document.getElementById("dfs_reultado").innerHTML = txtDesc + "<br>" + txtFin;
    }

    dfs(grafo, raiz) {

        tempo = 0;
        for (let u = 0; u < grafo.length; u++) {
            cor[u] = 'BRANCO';
        }
        for (let u = raiz; u < grafo.length; u++) {
            if (cor[u] == 'BRANCO') {
                this.dfs_visit(grafo, u, null);
            }
        }
        for (let u = 0; u < raiz; u++) {
            if (cor[u] == 'BRANCO') {
                this.dfs_visit(grafo, u, null);
            }
        }
        // let ordem = "Ordem Cinza: " + ordCinza;
        // let $link = $('#ordemCinza');
        // $link.text(ordem);
        // ordem = "Ordem preto: " + ordEncontro;
        // $link = $('#ordem');
        // $link.text(ordem);
        // console.log(f + d);
    }

    dfs_visit(grafo, u, dest) {
        cor[u] = 'CINZA';
        if (dest != null) {
            caminho.push(u);
            if (u == dest) document.getElementById("caminho_result").innerHTML = "Caminho entre os vértices: " + caminho;
        }
        tempo_chegada[u] = tempo++;
        for (let v = 0; v < grafo.length; v++) {
            if (grafo[u][v] != 0) {
                if (cor[v] == 'BRANCO') {
                    this.dfs_visit(grafo, v, dest);
                }
            }
        }
        tempo_finalizacao[u] = tempo++;
        cor[u] = 'PRETO';
    }


    chamarBFS(grafo) {
        // let raiz = prompt("Entre com o vértice raíz para a BFS: ");
        let raiz = 0;
        this.bfs(grafo, raiz, null);
    }


    bfs(grafo, raiz, dest) {
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
        
    }
}

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
            return console.error();

        }
        return this.items.shift();
    }
    // front() 
    isEmpty() {
        return this.items.length == 0;
    }
    // printQueue() 
}

// let obj = new Busca();
// obj.chamarDFS(grafo);
// obj.busca();
