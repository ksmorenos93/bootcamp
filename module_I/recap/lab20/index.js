const Graph = require('./Graph');
// Crear un nuevo grafo
const graph = new Graph();

// Agregar vértices
graph.addVertex('Andres');
graph.addVertex('Beto');
graph.addVertex('Camilo');
graph.addVertex('Daniela');

// Agregar aristas
graph.addEdge('Andres', 'Beto');
graph.addEdge('Andres', 'Camilo');
graph.addEdge('Beto', 'Daniela');
graph.addEdge('Camilo', 'Daniela');

// Mostrar el grafo
graph.display();
