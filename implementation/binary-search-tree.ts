import { BinaryTreeNode } from "./tree";

class BinarySearchTree {
  root: BinaryTreeNode;

  constructor(numbers: Array<number>) {
    this._init(numbers)
  }

  private _init(numbers: Array<number>) {
    this.root = new BinaryTreeNode(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
      this.insertNode(this.root, numbers[i])      
    }
  }
  
  public insertNode(node: BinaryTreeNode, num: number) {
    // if there is no number for some reason;
    if(num > node.data){
      if(node.right === null) {
        node.right = new BinaryTreeNode(num)
      } else {
        this.insertNode(node.right, num)
      }
    }
    if(num < node.data){
      if(node.left === null) {
        node.left = new BinaryTreeNode(num)
      } else {
        this.insertNode(node.left, num)
      }
    }
  }

  public inOrderTraversal() {
    const traverse = (node: BinaryTreeNode) => {
      node.left && traverse(node.left)
      node.data && console.log(node.data);
      node.right && traverse(node.right)
    }
    traverse(this.root)
  }
}

const nums = [5,6,7, 4, 9, 10, 11, 1,2,3,8,0,15]

const BST = new BinarySearchTree(nums);
BST.inOrderTraversal()

//  [0,6,7, 8, 9, 10, 11, 1,2,3,4,5,]

//             [0]
//            [6,6]
//      [3,4]       [5,6]
// [7, 8] [9, 10] [11, 12] [13, 14]