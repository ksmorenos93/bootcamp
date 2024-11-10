// Definición del nodo del árbol
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Definición del árbol binario
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // Función para insertar un nuevo valor en el árbol
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  // Función auxiliar para insertar un nodo en el lugar correcto
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  // Recorrido en orden
  inOrder(node, result = []) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
  
  // Función para obtener la raíz del árbol
  getRootNode() {
    return this.root;
  }
}

module.exports = BinaryTree;
