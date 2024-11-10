const WeightedGraph = require('./WeightedGraph');
// Crear un nuevo grafo ponderado
const graph = new WeightedGraph();

// Agregar vértices (ciudades)
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Agregar aristas (carreteras con pesos)
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// Encontrar la ruta más corta entre 'A' y 'E'
const shortestPath = graph.dijkstra('A', 'E');
console.log('Shortest Path:', shortestPath); // Output: [ 'A', 'C', 'D', 'F', 'E' ]