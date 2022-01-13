"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.QueueLinkList = exports.QueueArray = void 0;
var linked_list_1 = require("./linked-list");
var buildQueueLinkList = function (startQueue) {
    var queue = linked_list_1.LinkList(startQueue);
    return {
        enqueue: queue.pushBack,
        dequeue: queue.popFront,
        isEmpty: queue.isEmpty
    };
};
var buildQueueArray = function (startQueue) {
    var queue = __spreadArrays(startQueue);
    return {
        enqueue: function (x) { return queue.push(x); },
        dequeue: function () { return queue.shift(); },
        isEmpty: function () { return queue.length === 0; }
    };
};
exports.QueueArray = buildQueueArray;
exports.QueueLinkList = buildQueueLinkList;
