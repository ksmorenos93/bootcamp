const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge (vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
  }
  
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    
    // Inicializar el estado
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    
    // Se ejecuta siempre y cuando haya algo en "nodes" y tenga items encolados
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      
      if (smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          // buscar nodo vecino
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calcular la nueva distancia entre node vecino
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          
          if (candidate < distances[nextNeighbor]) {
            // actualizar mi nueva distancia al vecino
            distances[nextNeighbor] = candidate;
            // actulizando el objeto previous - como llegamos al vecino
            previous[nextNeighbor] = smallest;
            // encolar en prioridad con el nuevo de prioridad hacia mis nodos
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

module.exports = WeightedGraph;