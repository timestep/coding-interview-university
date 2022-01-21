import { BinaryTreeNode } from "./tree";

class BinarySearchTree {
  root: BinaryTreeNode;
  public nodeCount: number;

  constructor(numbers: Array<number>) {
    this.nodeCount = 0;
    this._init(numbers)
  }

  private _init(numbers: Array<number>) {
    this.root = new BinaryTreeNode(numbers[0]);
    this.nodeCount++;
    for (let i = 1; i < numbers.length; i++) {
      this.insertNode(this.root, numbers[i])      
    }
  }
  
  public insertNode(node: BinaryTreeNode, num: number) {
    // if there is no number for some reason;
    if(num > node.data){
      if(node.right === null) {
        this.nodeCount++;
        node.right = new BinaryTreeNode(num)
      } else {
        this.insertNode(node.right, num)
      }
    }
    if(num < node.data){
      if(node.left === null) {
        this.nodeCount++;
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

  public printValues() {
    this.inOrderTraversal()
  }

  public deleteTree() {
    this.root = new BinaryTreeNode
  }

  private search(node, val): BinaryTreeNode | null {
    if(node.data === val) return node;
    if(val < node.data && node.left) return this.search(node.left, val)
    if(val > node.data && node.right) return this.search(node.right, val)
    return null;
  }

  public isInTree(val: number): boolean {
    return this.search(this.root, val) !== null;
  }

  public bfsTraversal() {
    const queue = [this.root];
    while(queue.length !== 0) {
      queue[0].left && queue.push(queue[0].left);
      queue[0].right && queue.push(queue[0].right);
      console.log(queue[0].data);
      queue.shift();
    }
  }
  
  public getMin(): BinaryTreeNode['data'] {
    let node = this.root
    while(node.left) {
      node = node.left
    }
    return node.data;
  }
  
  public getMax(): BinaryTreeNode['data'] {
    let node = this.root
    while(node.right) {
      node = node.right
    }
    return node.data;
  }

  public getHeight(): number {
    const subTreeLevel = (node: BinaryTreeNode, size: number): number => {
      size++
      if(node.left || node.right) return Math.max(
        node.left ? subTreeLevel(node.left, size) : size, 
        node.right ? subTreeLevel(node.right, size) : size
      )
      return size;
    }

    return subTreeLevel(this.root, 0)
  }

  private isSubTreeLess(node, val): boolean {
    if(node === null) return true;
    if(node.data <= val) {
      return this.isSubTreeLess(node.left, node.data) 
        && this.isSubTreeGreater(node.right, node.data)
    }
    else {
      return false;
    }
  }

  private isSubTreeGreater(node, val): boolean {
    if(node === null) return true;
    if(node.data > val) {
      return this.isSubTreeLess(node.left, node.data) && this.isSubTreeGreater(node.right, node.data)
    }
    else {
      return false;
    }
  }

  private isBinarySearchTree(node): boolean {
    if(node === null) return true;
    if(
         this.isSubTreeLess(node.left, node.data) 
      && this.isSubTreeGreater(node.right, node.data) 
      && this.isBinarySearchTree(node.left)
      && this.isBinarySearchTree(node.right)
    ) {
      return true;
    }
    return false;
  }

  public isBst(): boolean {
    if(this.root === null) return false;
    return this.isBinarySearchTree(this.root)
  }

  public delete(val: number): void {
    let node = this.search(this.root, val);
    if(!node.left && !node.right) {
      node.data = null;
    } else if(node.left && !node.right) {
      node.data = node.left.data;
      node.left = node.left?.left;
      node.right = node.left?.right;
    } else if(node.right && !node.left) {
      node.data = node.right.data;
      node.left = node.right?.left;
      node.right = node.right?.right;
    }

    // if no left/right;
    // if one left/right;
    // if two left/right....?
    return null
  }

  private compareSuccessor(node, val): BinaryTreeNode | false {
    if(node.data === val) return node.right;
    if(val < node.left.data) return this.compareSuccessor(node.left, val);
    if(val > node.right.data) return this.compareSuccessor(node.right, val);
    if(node.right.data > val > node.left.data ) return node.right;
    return false;
  }

  public getSuccesor(val: number): BinaryTreeNode | false {
    return this.compareSuccessor(this.root, val)
  }

}

const nums = [5,6,7, 4, 9, 10, 11, 1,2,3,8, 0,15];

const BST = new BinarySearchTree(nums);
// BST.inOrderTraversal()
// console.log(BST.nodeCount, nums.length)
// console.log(BST.isInTree(16))
// // BST.bfsTraversal()
// console.log(BST.bfsTraversal())
// console.log(BST.isBst())
// BST.delete(5)
// console.log(BST.bfsTraversal())
console.log(BST.getSuccesor(5))
// console.log(BST.root)
// console.log(BST.root.left.left)
// //  [0,6,7, 8, 9, 10, 11, 1,2,3,4,5,]

//             [0]
//            [6,6]
//      [3,4]       [5,6]
// [7, 8] [9, 10] [11, 12] [13, 14]