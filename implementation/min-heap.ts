type HeapNode = {key: number; value: number}

export class MinHeap {
  heap: Array<number> = []
  
  constructor(arr?: Array<number>) {
    this.heapSort(arr);
  }

  private _getParent(i: number): HeapNode {
    return {
      key: Math.floor(i/2),
      value: this.heap[Math.floor(i/2)]
    }
  }

  private _getMinChild(i: number): HeapNode | null{
    const leftChild = {
      key: 2*i,
      value: this.heap[2*i]
    }
    const rightChild ={
      key: 2*i+1,
      value: this.heap[2*i+1]}
    if(leftChild.value === undefined && rightChild.value === undefined) return null;
    if(leftChild.value && !rightChild.value) return leftChild;
    if(!leftChild.value && rightChild.value) return rightChild;
    return leftChild.value < rightChild.value ? leftChild : rightChild
  }
  
  public getMin(): number {
    return this.heap[0]
  }

  public getSize(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private _siftUp(i: number): number {
    const val = this.heap[i];
    const parent = this._getParent(i)
    if(!parent.value) return;
    this.heap[parent.key] = val;
    this.heap[i] = parent.value;
    return parent.key;
  }

  private _siftDown(i: number): number {
    const val = this.heap[i];
    const minChild = this._getMinChild(i)
    if(!minChild) return;
    this.heap[minChild.key] = val;
    this.heap[i] = minChild.value;
    return minChild.key;
  }

  public insert(val: number): void {
    let end = this.heap.length + 1;
    this.heap[end] = val;
    while(this._getParent(end).value > val || this._getParent(end) !== undefined) {
      end = this._siftUp(end)
      if(this._getParent(end) === undefined) return;
    }
  }

  public extractMin(): number {
    const minVal = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop();
    let minVali = 0;
    const child = this._getMinChild(minVali)
    if(!child) return ;minVal;
    while(this.heap[minVali] > child.value){
      minVali = this._siftDown(minVali)
      if(!minVali) return minVal;
      if(this._getMinChild(minVali) === undefined || this._getMinChild(minVali) === null) return minVal;
    }

    return minVal
  }

  public remove(i: number): number {
    const removeVal = this.heap[i];
    this.heap[i] = this.heap[this.heap.length]
    this.heap.pop();
    let xIdx = i;
    while(this.heap[xIdx] > this._getMinChild(xIdx).value || this._getMinChild(xIdx) !== undefined){
      xIdx = this._siftDown(xIdx)
      if(this._getMinChild(xIdx) === undefined) return;
    }
    return removeVal
  }

  public heapify(arr: Array<number>): void {
    this.heap = [...arr]
  }

  public heapSort(arr: Array<number>): void {
    this.heapify(arr);
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this._siftDown(i)     
    }
  }
}