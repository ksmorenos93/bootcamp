const BinaryTree = require("./BinaryTree");
// Crear un nuevo árbol binario
const tree = new BinaryTree();

// Insertar valores en el árbol
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

// Obtener la raíz del árbol
const root = tree.getRootNode();
console.log(root);

// Realizar el recorrido en preorden y mostrar el resultado
const preOrderResult = tree.preOrder(root);
console.log("Pre-order Traversal:", preOrderResult);
