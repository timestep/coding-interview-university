export class AjacancyListGraph {
  // AdjacancyListImp
  // index is node, value is node connection
  adj = []
  matrix = []
  constructor() {}

  public addEdge(v: number, w: number) {
    if(!this.adj[v]) this.adj[v] = []
    this.adj[v].push(w)
    if(!this.matrix[v]) {
      this.matrix[v] = []
    }
    this.matrix[v][w] = 1;
  }

  private _dfsAdjRecursive(nodeNumber, vistedArray) {
    vistedArray[nodeNumber] = true
    
    console.log(nodeNumber + ' ->')

    if(!this.adj[nodeNumber]){
      return;
    }

    this.adj[nodeNumber].forEach((i: number) => {
      if(!vistedArray[i]) {
        this._dfsAdjRecursive(i, vistedArray)
      }
    })
  }  

  private _dfsMatrixRecusive(nodNumber, visitedArray) {
    visitedArray[nodNumber] = true;

    console.log(nodNumber + ' ->')
    
    if(!this.matrix[nodNumber]) return;

    this.matrix[nodNumber].forEach((on, index) => {
      if(!on) return;
      console.log(nodNumber, index)
      if(!visitedArray[index]) {
        this._dfsMatrixRecusive(index, visitedArray)
      } else {
        console.log('visted', index)
      }

    })
  }

  public RescursiveAdjDFS() { 
    let visited = []
    console.log('RescursiveAdjDFS')
    console.log(this.adj)
    this._dfsAdjRecursive(0, visited)
  }

  public RecursiveMatrixDFS() {
    let visited = []
    console.log('RecursiveMatrixDFS')
    console.log(this.matrix)
    this._dfsMatrixRecusive(0, visited)
  }

  public StackAdjDFS() {
    let visited = [true]
    let stack = [...this.adj[0]]

    console.log('StackAdjDFS')
    console.log('0 -> ')

    while(stack.length !== 0) {
      const node = stack.pop()
      console.log('remove stack', stack)
      if(!visited[node]) {
        visited[node] = true;
        console.log(node + ' -> ')
        if(this.adj[node] && this.adj[node].length > 0) {
          //can optimize by filters those that are already visted.
          stack = [...stack, ...this.adj[node]]
          console.log('add stack', stack)
        }
      }
    }
  }
  
  public StackMatrixDFS() {
    let visited = [false]
    let stack = [0]

    console.log('StackMatrixDFS')
    console.log('0 -> ')

    while(stack.length !== 0) {
      const node = stack.pop()
      console.log('remove stack', stack)
      if(!visited[node]) {
        visited[node] = true;
        console.log(node + ' -> ')
        if(this.matrix[node] && this.matrix[node].length > 0) {
          //can optimize by filters those that are already visted.
          const adjNodes = this.matrix[node].map((i, idx) => i === 1 ? idx : null).filter((x) => x);
          stack = [...stack, ...adjNodes]
          console.log('add stack', stack)
        }
      }
    }
  }

  public AdjListBFS() {
    let queue = [0];
    const visited = [];

    while(queue.length !== 0){
      const dequeued = queue.shift()
      if(dequeued !== undefined) {
        if(!visited[dequeued]) {
          console.log(dequeued, ' ->')
          visited[dequeued] = true;
          // filter for civisted before adding to queue
          if(this.adj[dequeued]) queue = [...queue, ...this.adj[dequeued]]
        }
      }
    }
  }

  public MatrixBFS() {
    let queue = [0];
    const visited = [];

    while(queue.length !== 0){
      const dequeued = queue.shift()
      if(dequeued !== undefined) {
        if(!visited[dequeued]) {
          console.log(dequeued, ' ->')
          visited[dequeued] = true;
          // filter for civisted before adding to queue
          const node = this.matrix[dequeued]
          if(node){
            const nodeEdges = this.matrix[dequeued]
              .map((i, idx) => i === 1 ? idx : null)
              .filter(x => x !== null);
              queue = [...queue, ...nodeEdges]
          }
        }
      }
    }
  }

}