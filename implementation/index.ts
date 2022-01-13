import { QueueLinkList, QueueArray } from "./queue";

const q = QueueLinkList([1,2,3])
const qArray = QueueArray([1,2,3])

// console.log(q.isEmpty(), false)
// console.log(q.enqueue(4))
// console.log(q.dequeue(), 1)
// console.log(q.dequeue(), 2)
// console.log(q.dequeue(), 3)
// console.log(q.dequeue(), 4)
// console.log(q.dequeue(), null)
// console.log(q.isEmpty(), true)

console.log(qArray.isEmpty(), false)
console.log(qArray.enqueue(4), 4)
console.log(qArray.dequeue(), 1)
console.log(qArray.dequeue(), 2)
console.log(qArray.dequeue(), 3)
console.log(qArray.dequeue(), 4)
console.log(qArray.dequeue(), null)
console.log(qArray.isEmpty(), true)