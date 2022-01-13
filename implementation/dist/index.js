"use strict";
exports.__esModule = true;
var queue_1 = require("./queue");
var q = queue_1.QueueLinkList([1, 2, 3]);
var qArray = queue_1.QueueArray([1, 2, 3]);
// console.log(q.isEmpty(), false)
// console.log(q.enqueue(4))
// console.log(q.dequeue(), 1)
// console.log(q.dequeue(), 2)
// console.log(q.dequeue(), 3)
// console.log(q.dequeue(), 4)
// console.log(q.dequeue(), null)
// console.log(q.isEmpty(), true)
console.log(qArray.isEmpty(), false);
console.log(qArray.enqueue(4), 4);
console.log(qArray.dequeue(), 1);
console.log(qArray.dequeue(), 2);
console.log(qArray.dequeue(), 3);
console.log(qArray.dequeue(), 4);
console.log(qArray.dequeue(), null);
console.log(qArray.isEmpty(), true);
