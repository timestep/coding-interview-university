import { QueueArray } from "./queue";

export class BinaryTreeNode {
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;
  data?: string | number;

  constructor(data?: any) {
    this.data = data;
    this.left = null
    this.right = null;
  }
}

// [0,1,2,3,4,5,6,7, 8, 9, 10, 11]

//             [0]
//            [1,2]
//      [3,4]       [5,6]
// [7, 8] [9, 10] [11, 12] [13, 14]

export class BinaryTree {
  size: number;
  height: number;
  root: BinaryTreeNode;
  
  constructor(array: Array<number>) {
    this.size = 0;
    this.height = 0;
    this.root = new BinaryTreeNode()
    this.init(array);
  }
  
  /**
    * build
    */
  private init(array: Array<number>) {
    this.root = this._addNode(array, this.root, 0)
    return this.root;
  }

  private _addNode(array: Array<number>, node: BinaryTreeNode, i: number): BinaryTreeNode {
    if(i > array.length) return;
    if(array.length === 0) return;
    
    this.size++;

    node.data = array[i];
    node.left = this._addNode(array, new BinaryTreeNode(), (i*2+1));
    node.right = this._addNode(array, new BinaryTreeNode(), (((i+1)*2)));

    return node;
  }

  public dfsTraversalInOrder() {
    const traverse = (node: BinaryTreeNode) => {
      node.left && traverse(node.left);
      node.data && console.log(node.data);
      node.right && traverse(node.right);
    }
    traverse(this.root)
  }

  public dfsTraversalPreOrder() {
    const traverse = (node: BinaryTreeNode) => {
      node.data && console.log(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root)
  }

  public dfsTraversalPostOrder() {
    const traverse = (node: BinaryTreeNode) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      node.data && console.log(node.data);
    }
    traverse(this.root)
  }

  public bfsTraversal() {
    const queue = [this.root]
    while(queue.length !== 0){
      console.log(queue[0].data)
      queue[0].left && queue.push(queue[0].left)
      queue[0].right && queue.push(queue[0].right)
      queue.shift()
    }
  }
}

// (a) Inorder (Left, Root, Right) : 4 2 5 1 3 
// (b) Preorder (Root, Left, Right) : 1 2 4 5 3 
// (c) Postorder (Left, Right, Root) : 4 5 2 3 1

// Breadth-First or Level Order Traversal: 1 2 3 4 5

// const x = new BinaryTree([1,2,3,4,5])


// console.log(JSON.stringify(x))
// // x.dfsTraversalInOrder()
// // x.dfsTraversalPreOrder()
// x.bfsTraversal()