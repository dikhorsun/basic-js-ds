const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.tree = null
  }

  root() {
    return this.tree
    // remove line with error and write your code here
  }

  add(data) {
    this.tree = addT(this.tree, data)

    function addT(node, data) {
      if (!node) {
        return new Node (data)
      }
      if (data === node.data) {
        return node
      }
      if (data<node.data) {
        node.left = addT(node.left, data)
      } else {
        node.right = addT(node.right, data)
      }

      return node;
    }
  } 

  min() {
    if (!this.tree) return null
    
    let minNode = this.tree
    while (minNode.left) {
      minNode = minNode.left
    }
    return minNode.data
  }

  max() {
    if (!this.tree) return null

    let maxNode = this.tree
    while (maxNode.right) {
      maxNode = maxNode.right
    } 
    return maxNode.data
    }

  has(data) {
    return searcT(this.tree, data)

    function searcT(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ? searcT(node.left, data) : searcT(node.right, data)
    }
  }

  find(data) {
   return findT(this.tree, data)

   function findT(node, data){
    if (!node) return null
  
    if (node.data === data) {
      return node
    }
    if (node.data > data) {
      return findT(node.left, data)
    }
    if (node.data < data) {
      return findT(node.right, data)
    }
   }
  }

  remove(data) {
    this.tree = removeT(this.tree, data)

    function removeT(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = removeT(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeT(node.right, data)
        return node
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left) { 
          node = node.right
          return node;
        }
        if (!node.right) { 
          node = node.left
          return node
        }
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeT(node.right, minRight.data)

        return node;
      }
    }
  }

}

module.exports = {
  BinarySearchTree
};