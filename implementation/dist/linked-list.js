"use strict";
exports.__esModule = true;
exports.LinkList = void 0;
var buildLinkNode = function (data, next, prev) {
    var _data = data;
    var _next = next;
    var _prev = prev;
    return {
        data: _data,
        next: _next,
        prev: _prev
    };
};
var buildList = function (arr) {
    var _size = 0;
    var _head = buildLinkNode(null);
    var _tail = buildLinkNode(null);
    var _curr = _head;
    arr.forEach(function (x) {
        _curr.next = buildLinkNode(x, null, _curr);
        _curr = _curr.next;
        _size++;
    });
    _tail.prev = _curr;
    var size = function () {
        return _size;
    };
    var isEmpty = function () {
        return _size <= 0 ? true : false;
    };
    var valueAt = function (idx) {
        var _currIdx = 0;
        var _currNode = _head.next;
        if (idx > size() - 1)
            return null;
        while (_currIdx < idx) {
            _currNode = _currNode.next;
            _currIdx++;
        }
        return _currNode.data;
    };
    var pushFront = function (value) {
        var newNode = buildLinkNode(value, _head.next, _head);
        _head.next = newNode;
        _size++;
        return value;
    };
    var popFront = function () {
        var _popedNode = _head.next;
        _head.next = _head.next.next;
        _size--;
        return _popedNode.data;
    };
    var pushBack = function (value) {
        var newNode = buildLinkNode(value, _tail, _tail.prev);
        _tail.prev.next = newNode;
        _tail.prev = newNode;
        _size++;
        return value;
    };
    var popBack = function () {
        var poppedBack = _tail.prev;
        _tail.prev.prev.next = _tail;
        _tail.prev = _tail.prev.prev;
        _size--;
        return poppedBack.data;
    };
    var front = function () {
        return _head.next.data;
    };
    var back = function () {
        return _tail.prev.data;
    };
    var insert = function (idx, value) {
        // TODO: id if index between first half or second half, for tail
        var _currIdx = 0;
        var _prevNode = _head.next;
        if (idx > size() - 1)
            return null;
        while (_currIdx < idx - 1) {
            _prevNode = _prevNode.next;
            _currIdx++;
        }
        var newNode = buildLinkNode(value, _prevNode.next, _prevNode);
        _prevNode.next = newNode;
        _prevNode.next.prev = newNode;
        _size++;
        return newNode.data;
    };
    var erase = function (idx) {
        // TODO: id if index between first half or second half, for tail
        // TODO: catch for tail and head
        var _currIdx = 0;
        var _currNode = _head.next;
        var _prevNode = _head.prev;
        if (idx > size() - 1)
            return null;
        if (idx === 0) {
            _head.next = _currNode.next;
            _currNode.next.prev = _head;
            _size--;
            return _currNode.data;
        }
        while (_currIdx < idx) {
            _prevNode = _currNode;
            _currNode = _currNode.next;
            _currIdx++;
        }
        var _nextNode = _currNode.next;
        // let _prevNode = _currNode.prev;
        _prevNode.next = _nextNode;
        _nextNode.prev = _prevNode;
        _size--;
        return _currNode.data;
    };
    var valueNFromEnd = function (idx) {
        var _currIdx = 0;
        var _currNode = _tail.prev;
        if (idx > size() - 1)
            return null;
        while (_currIdx < idx) {
            _currNode = _currNode.prev;
            _currIdx++;
        }
        return _currNode.data;
    };
    var removeValue = function (val) {
        var _currIdx = 0;
        var _currNode = _head.next;
        // is 0(2n);
        // can make 0(n) but lazy to write inside while.;
        while (_currNode.next !== null) {
            if (_currNode.data === val) {
                erase(_currIdx);
                break;
            }
            ;
            _currNode = _currNode.next;
            _currIdx++;
        }
        return _currNode.data;
    };
    var reverse = function () {
        // REDO IMPLEMENTAIOTN
        // This implementation is off by one.
        var _temp = _tail.prev;
        var _curr = _head;
        while (_curr) {
            _temp = _curr.prev;
            _curr.prev = _curr.next;
            _curr.next = _temp;
            _curr = _curr.prev;
        }
        if (_temp !== null) {
            _head = _temp.prev;
        }
    };
    return {
        size: size,
        isEmpty: isEmpty,
        valueAt: valueAt,
        pushFront: pushFront,
        pushBack: pushBack,
        popBack: popBack,
        popFront: popFront,
        front: front,
        back: back,
        insert: insert,
        erase: erase,
        valueNFromEnd: valueNFromEnd,
        removeValue: removeValue,
        reverse: reverse
    };
};
// const test = [0, 1, 2, 3, 4];
// const emptyTest = [];
// const emptyLinkedList = buildList(emptyTest)
// let linkedList = buildList(test);
// console.log(emptyLinkedList.size(), 0)
// console.log(emptyLinkedList.isEmpty(), true)
// console.log(linkedList.size(), 5)
// console.log(linkedList.isEmpty(), false)
// console.log(linkedList.valueAt(5), null)
// linkedList = buildList(test);
// console.log(linkedList.pushFront(4), 4)
// console.log(linkedList.size(), 6)
// linkedList = buildList(test);
// console.log(linkedList.valueAt(0), 0)
// console.log(linkedList.valueAt(1), 1)
// linkedList = buildList(test);
// console.log(linkedList.popFront(), 0)
// console.log(linkedList.size(), 4)
// console.log(linkedList.valueAt(0), 1)
// linkedList = buildList(test);
// console.log(linkedList.pushBack(6), 6)
// console.log(linkedList.size(), 6)
// console.log(linkedList.valueAt(5), 6)
// console.log(linkedList.pushBack(7), 7)
// console.log(linkedList.size(), 7)
// console.log(linkedList.valueAt(6), 7)
// linkedList = buildList(test);
// console.log(linkedList.popBack(), 4)
// console.log(linkedList.size(), 4)
// console.log(linkedList.valueAt(6), null)
// console.log(linkedList.valueAt(5), null)
// linkedList = buildList(test);
// console.log(linkedList.front(), 0);
// console.log(linkedList.back(), 4)
// linkedList = buildList(test);
// console.log(linkedList.valueAt(0), 0)
// console.log(linkedList.valueAt(1), 1)
// console.log(linkedList.valueAt(2), 2)
// console.log(linkedList.valueAt(3), 3)
// console.log(linkedList.valueAt(4), 4);
// console.log(linkedList.valueAt(5), null);
// linkedList = buildList(test);
// console.log(linkedList.insert(2,10))
// console.log(linkedList.insert(2,10))
// console.log(linkedList.size(), 8);
// console.log(linkedList.valueAt(0), 1);
// console.log(linkedList.valueAt(1), 1);
// console.log(linkedList.valueAt(2), 10);
// console.log(linkedList.valueAt(3), 10);
// console.log(linkedList.valueAt(4), 2);
// console.log(linkedList.valueAt(5), 3);
// console.log(linkedList.valueAt(6), 4);
// console.log(linkedList.valueAt(7), null);
// linkedList = buildList(test);
// console.log(linkedList.erase(1))
// console.log(linkedList.size(), 4)
// console.log(linkedList.valueAt(0), 0);
// console.log(linkedList.valueAt(1), 2);
// console.log(linkedList.valueAt(2), 3);
// linkedList = buildList(test);
// console.log(linkedList.valueAt(0), 0);
// console.log(linkedList.valueAt(1), 1);
// console.log(linkedList.valueAt(2), 3);
// console.log(linkedList.valueAt(3), 3);
// console.log(linkedList.valueAt(4), 4);
// console.log(linkedList.valueAt(5), null);
// console.log(linkedList.valueNFromEnd(0), 4)
// console.log(linkedList.valueNFromEnd(1), 3)
// linkedList = buildList(test);
// console.log(linkedList.valueAt(0), 0);
// console.log(linkedList.valueAt(1), 1);
// console.log(linkedList.valueAt(2), 3);
// console.log(linkedList.valueAt(3), 3);
// console.log(linkedList.valueAt(4), 4);
// console.log(linkedList.valueAt(5), null);
// console.log(linkedList.removeValue(0), 0)
// console.log(linkedList.valueAt(0), 1);
// console.log(linkedList.valueAt(1), 2);
// console.log(linkedList.valueAt(2), 3);
// console.log(linkedList.valueAt(3), 4);
// console.log(linkedList.valueAt(4), null);
// linkedList = buildList(test);
// console.log(linkedList.reverse())
// console.log(linkedList.valueAt(0), 4);
// console.log(linkedList.valueAt(1), 3);
// console.log(linkedList.valueAt(2), 2);
// console.log(linkedList.valueAt(3), 1);
// console.log(linkedList.valueAt(4), 0);
// console.log(linkedList.valueAt(5), null);
exports.LinkList = buildList;
