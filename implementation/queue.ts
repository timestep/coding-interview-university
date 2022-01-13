import { LinkList } from './linked-list'

interface Queue {
  enqueue(val): void;
  dequeue(): void;
  isEmpty(): void; 
}

const buildQueueLinkList = (startQueue?: number[]): Queue => {
  const queue = LinkList(startQueue);

  return {
    enqueue: queue.pushBack,
    dequeue: queue.popFront,
    isEmpty: queue.isEmpty,
  }
}

const buildQueueArray = (startQueue?: number[]): Queue => {
  const queue = [...startQueue];
  
  return {
    enqueue: (x: number) => queue.push(x),
    dequeue: () => queue.shift(),
    isEmpty: () => queue.length === 0,
  }
}

export const QueueArray = buildQueueArray;
export const QueueLinkList = buildQueueLinkList;
