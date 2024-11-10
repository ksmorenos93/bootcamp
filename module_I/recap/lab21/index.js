const Graph = require('./Graph');
// Crear un nuevo grafo no dirigido
const graph = new Graph();

// Agregar vértices
graph.addVertex('Andres');
graph.addVertex('Beto');
graph.addVertex('Camilo');
graph.addVertex('Daniela');
graph.addVertex('Eduardo');
//graph.addVertex('Francisco');

// Agregar aristas
graph.addEdge('Andres', 'Beto');
graph.addEdge('Andres', 'Camilo');
graph.addEdge('Beto', 'Daniela');
graph.addEdge('Camilo', 'Daniela');
graph.addEdge('Daniela', 'Eduardo');
//graph.addEdge('Eduardo', 'Francisco');

// Mostrar el grafo
graph.display();

// Realizar una búsqueda en profundidad desde el vértice 'Andres'
const dfsResult = graph.depthFirstSearch('Camilo');
console.log('DFS Result:', dfsResult);
