// import { QueueLinkList, QueueArray } from "./queue";
// import { HashTable } from './hash-table'
// import { SearchSubString } from './karp-rubin'
import { binarySearch } from "./binary-search";
// const q = QueueLinkList([1,2,3])
// const qArray = QueueArray([1,2,3])

// console.log(q.isEmpty(), false)
// console.log(q.enqueue(4))
// console.log(q.dequeue(), 1)
// console.log(q.dequeue(), 2)
// console.log(q.dequeue(), 3)
// console.log(q.dequeue(), 4)
// console.log(q.dequeue(), null)
// console.log(q.isEmpty(), true)

// console.log(qArray.isEmpty(), false)
// console.log(qArray.enqueue(4), 4)
// console.log(qArray.dequeue(), 1)
// console.log(qArray.dequeue(), 2)
// console.log(qArray.dequeue(), 3)
// console.log(qArray.dequeue(), 4)
// console.log(qArray.dequeue(), null)
// console.log(qArray.isEmpty(), true)

// const hashTable = HashTable();
// hashTable.add('Canda', '1212');
// hashTable.add('Wwere', '23423423')
// hashTable.display();

// const isThere = SearchSubString('teeee', 'wewreteeeeasdfa');
// console.log(isThere, true)

const isExist = binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101], 101);
  
console.log(isExist)