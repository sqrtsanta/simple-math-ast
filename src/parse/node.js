class ASTNode {
  constructor(token) {
    this.token = token;

    this.left = null;
    this.right = null;
  }

  setRight(node) {
    this.right = node;
  }

  setLeft(node) {
    this.left = node;
  }
}

export default ASTNode;
