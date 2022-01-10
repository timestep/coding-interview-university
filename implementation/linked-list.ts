interface LinkNode {
  data: number | null;
  next?: LinkNode | null;
  prev?: LinkNode | null;
}

interface List {
  size(): number;
  isEmpty(): boolean;
  valueAt(index: number): number; //returns the value of the nth item (starting at 0 for first)
  pushFront(value: number); //adds an item to the front of the list
  popFront(): number; //remove front item and return its value
  pushBack(value); // adds an item at the end
  // removes end item and returns its value
  popBack(): number; 
  front(): number; //get value of front item
  back(): number; //get value of end item
  insert(index: number, value: number); // insert value at index, so _current item at that index is pointed to by new item at index
  erase(index: number); //removes node at given index
  valueNFromEnd(n: number): number; //returns the value of the node at nth position from the end of the list
  reverse(); // reverses the list
  removeValue(value: number) //removes the first item in the list with this value
}

const buildLinkNode = (
  data: number, 
  next?: LinkNode | null, 
  prev?: LinkNode | null
): LinkNode => {
  const _data = data;
  const _next = next;
  const _prev = prev;
  return {
    data: _data,
    next: _next,
    prev: _prev
  }
}

const buildList = (arr: number[]): List => {
  let _size = 0;
  let _head: LinkNode = buildLinkNode(null);
  let _tail: LinkNode = buildLinkNode(null);
  let _curr: LinkNode = _head;

  arr.forEach((x) => {
    _curr.next = buildLinkNode(x, null, _curr)
    _curr = _curr.next; 
    _size++;
  })

  _tail.prev = _curr;  

  const size = () => {
    return _size;
  }
  
  const isEmpty = () => {
    return _size ? false : true;
  }

  const valueAt = (idx: number): number => {
    let _currIdx = 0;
    let _currNode = _head.next;
    
    if(idx > size() - 1) return null;

    while (_currIdx < idx) {
      _currNode = _currNode.next
      _currIdx++
    }

    return _currNode.data;
  }

  const pushFront = (value: number) => {
    const newNode = buildLinkNode(value, _head.next, _head)
    _head.next = newNode
    _size++;
    return value;
  }

  const popFront = () => {
    let _popedNode = _head.next;
    _head.next = _head.next.next;
    _size--;
    return _popedNode.data;
  }

  const pushBack = (value: number) => {
    let newNode = buildLinkNode(value, _tail, _tail.prev)
    _tail.prev.next = newNode;
    _tail.prev = newNode;
    _size++;
    return value;
  }
  
  const popBack = () => {
    const poppedBack = _tail.prev;
    _tail.prev.prev.next = _tail;
    _tail.prev = _tail.prev.prev;
    _size--;
    return poppedBack.data;
  }
  
  const front = () => {
    return _head.next.data;
  }
  const back = () => {
    return _tail.prev.data;
  }
  const insert = (idx: number, value: number) => {
    // TODO: id if index between first half or second half, for tail
    let _currIdx = 0;
    let _prevNode = _head.next;

    if(idx > size() - 1) return null;

    while (_currIdx < idx - 1) {
      _prevNode = _prevNode.next
      _currIdx++
    }

    let newNode = buildLinkNode(value, _prevNode.next, _prevNode)

    _prevNode.next = newNode;
    _prevNode.next.prev = newNode;
    
    _size++;

    return newNode.data;
  }
  const erase = (idx: number) => {
    // TODO: id if index between first half or second half, for tail
    // TODO: catch for tail and head
    let _currIdx = 0;
    let _currNode = _head.next;
    let _prevNode = _head.prev;
    if(idx > size() - 1) return null;

    if(idx === 0) {
      _head.next = _currNode.next;
      _currNode.next.prev = _head;
      _size--;
      return _currNode.data;
    }

    while (_currIdx < idx) {
      _prevNode = _currNode;
      _currNode = _currNode.next
      _currIdx++
    }
    let _nextNode = _currNode.next;
    // let _prevNode = _currNode.prev;
    _prevNode.next = _nextNode;
    _nextNode.prev = _prevNode;

    _size--;

    return _currNode.data; 
  }
  const valueNFromEnd = (idx: number) => {
    let _currIdx = 0;
    let _currNode = _tail.prev;
    if(idx > size() - 1) return null;

    while (_currIdx < idx) {
      _currNode = _currNode.prev
      _currIdx++
    }

    return _currNode.data;
  }
  const removeValue = (val: number) => {
    let _currIdx = 0;
    let _currNode = _head.next;
    // is 0(2n);
    // can make 0(n) but lazy to write inside while.;
    while (_currNode.next !== null) {
      if(_currNode.data === val) {
        erase(_currIdx);
        break;
      };
      _currNode = _currNode.next
      _currIdx++
    }

    return _currNode.data;
  }
  const reverse = () => {
    // REDO IMPLEMENTAIOTN
    // This implementation is off by one.
    let _temp = _tail.prev;
    let _curr = _head;

    while(_curr) {
      _temp = _curr.prev;
      _curr.prev = _curr.next;
      _curr.next = _temp;
      _curr = _curr.prev;  
    }

    if(_temp !== null){ 
      _head = _temp.prev;
    }
  }

  return {
    size,
    isEmpty,
    valueAt,
    pushFront,
    pushBack,
    popBack,
    popFront,
    front,
    back,
    insert,
    erase,
    valueNFromEnd,
    removeValue,
    reverse
  }
} 

const test = [0, 1, 2, 3, 4];
const emptyTest = [];

const emptyLinkedList = buildList(emptyTest)
let linkedList = buildList(test);

console.log(emptyLinkedList.size(), 0)
console.log(emptyLinkedList.isEmpty(), true)
console.log(linkedList.size(), 5)
console.log(linkedList.isEmpty(), false)
console.log(linkedList.valueAt(5), null)

linkedList = buildList(test);
console.log(linkedList.pushFront(4), 4)
console.log(linkedList.size(), 6)

linkedList = buildList(test);
console.log(linkedList.valueAt(0), 0)
console.log(linkedList.valueAt(1), 1)

linkedList = buildList(test);
console.log(linkedList.popFront(), 0)
console.log(linkedList.size(), 4)
console.log(linkedList.valueAt(0), 1)

linkedList = buildList(test);
console.log(linkedList.pushBack(6), 6)
console.log(linkedList.size(), 6)
console.log(linkedList.valueAt(5), 6)
console.log(linkedList.pushBack(7), 7)
console.log(linkedList.size(), 7)
console.log(linkedList.valueAt(6), 7)

linkedList = buildList(test);
console.log(linkedList.popBack(), 4)
console.log(linkedList.size(), 4)
console.log(linkedList.valueAt(6), null)
console.log(linkedList.valueAt(5), null)

linkedList = buildList(test);
console.log(linkedList.front(), 0);
console.log(linkedList.back(), 4)

linkedList = buildList(test);
console.log(linkedList.valueAt(0), 0)
console.log(linkedList.valueAt(1), 1)
console.log(linkedList.valueAt(2), 2)
console.log(linkedList.valueAt(3), 3)
console.log(linkedList.valueAt(4), 4);
console.log(linkedList.valueAt(5), null);

linkedList = buildList(test);
console.log(linkedList.insert(2,10))
console.log(linkedList.insert(2,10))
console.log(linkedList.size(), 8);
console.log(linkedList.valueAt(0), 1);
console.log(linkedList.valueAt(1), 1);
console.log(linkedList.valueAt(2), 10);
console.log(linkedList.valueAt(3), 10);
console.log(linkedList.valueAt(4), 2);
console.log(linkedList.valueAt(5), 3);
console.log(linkedList.valueAt(6), 4);
console.log(linkedList.valueAt(7), null);

linkedList = buildList(test);
console.log(linkedList.erase(1))
console.log(linkedList.size(), 4)
console.log(linkedList.valueAt(0), 0);
console.log(linkedList.valueAt(1), 2);
console.log(linkedList.valueAt(2), 3);

linkedList = buildList(test);
console.log(linkedList.valueAt(0), 0);
console.log(linkedList.valueAt(1), 1);
console.log(linkedList.valueAt(2), 3);
console.log(linkedList.valueAt(3), 3);
console.log(linkedList.valueAt(4), 4);
console.log(linkedList.valueAt(5), null);
console.log(linkedList.valueNFromEnd(0), 4)
console.log(linkedList.valueNFromEnd(1), 3)

linkedList = buildList(test);
console.log(linkedList.valueAt(0), 0);
console.log(linkedList.valueAt(1), 1);
console.log(linkedList.valueAt(2), 3);
console.log(linkedList.valueAt(3), 3);
console.log(linkedList.valueAt(4), 4);
console.log(linkedList.valueAt(5), null);
console.log(linkedList.removeValue(0), 0)
console.log(linkedList.valueAt(0), 1);
console.log(linkedList.valueAt(1), 2);
console.log(linkedList.valueAt(2), 3);
console.log(linkedList.valueAt(3), 4);
console.log(linkedList.valueAt(4), null);

linkedList = buildList(test);
console.log(linkedList.reverse())
console.log(linkedList.valueAt(0), 4);
console.log(linkedList.valueAt(1), 3);
console.log(linkedList.valueAt(2), 2);
console.log(linkedList.valueAt(3), 1);
console.log(linkedList.valueAt(4), 0);
console.log(linkedList.valueAt(5), null);