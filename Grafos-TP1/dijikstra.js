const INFINITY = Number.MAX_SAFE_INTEGER;
const grafo =
    [[0, 0, 4, 23, 60],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0],
    [0, 10, 0, 0, 0],
    [0, 0, 15, 0, 0]];

class dijikstra{
    constructor(grafo, s){
        this.grafo = grafo;
        this.dist  = [];
        this.pai   = [];
        this.def   = [];
        this.prov  = [];
        this.s     =  s;
    }

    inicializa(){
        for (let i = 0; i < this.grafo.length; i++) {
            this.dist[i] = INFINITY;
            this.pai[i]  = null;
        }
        this.dist[this.s] = 0;
    }
    
    relaxa(u,v){
        console.log("grafo [u][v] = " + this.grafo[u][v]);
        let w = this.dist[u] + this.grafo[u][v];
        if(this.dist[u] > w ){
            this.dist[v] = w;
            this.pai[v]  = u;
        }
    }

    menorCusto(){
        this.inicializa();
        for (let i = 0; i < this.grafo.length; i++) {
            this.prov[i] = this.grafo[i];
        }
        let size = this.prov.length;
        while(size != 0){ //wtf esse while -----------
            console.log("Q = "+ this.prov[this.s]);
            let u = this.minimo(this.prov[this.s]); 
            console.log("u = "+ u);
            this.def.push(u);
            for (let i = 0; i < this.prov.length; i++) {
                for (let v = 0; v < this.prov.length; v++) {
                    if(this.prov[i][v] != 0) this.relaxa(u,v);
                }   
            }
            size--;
        }
    }


    minimo(vetor){
        let aux = INFINITY;
        if (vetor) {
            for (let i = 0; i < vetor.length; i++) {
                if(vetor[i] < aux && vetor[i] != 0){
                    aux = vetor[i];
                    this.s = i;
                }            
            }
            return aux;
        }
        console.log('FIM DO VETOR');
    }
    // menorCusto(s){
    //     this.inicializa(s);
    //     while(true){
    //         let y; 
    //         let mindist = INFINITY;
    //         for (let z = 0; z < this.grafo.length; z++) {
    //              if(this.pai[z] == null && this.dist[z] < mindist){
    //                  mindist = this.dist[z]; 
    //                  y = z;
    //              }
    //         }
    //         if (mindist == INFINITY) break;
    //         this.pai[y] = 
    //     }
    // }
}
let objeto = new dijikstra(grafo, 0);
// let teste = objeto.minimo(vetor);
objeto.menorCusto();



