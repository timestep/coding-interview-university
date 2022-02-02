"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjacancyListGraph = void 0;
var AjacancyListGraph = /** @class */ (function () {
    function AjacancyListGraph() {
        // AdjacancyListImp
        // index is node, value is node connection
        this.adj = [];
        this.matrix = [];
    }
    AjacancyListGraph.prototype.addEdge = function (v, w) {
        if (!this.adj[v])
            this.adj[v] = [];
        this.adj[v].push(w);
        if (!this.matrix[v]) {
            this.matrix[v] = [];
        }
        this.matrix[v][w] = 1;
    };
    AjacancyListGraph.prototype._dfsAdjRecursive = function (nodeNumber, vistedArray) {
        var _this = this;
        vistedArray[nodeNumber] = true;
        console.log(nodeNumber + ' ->');
        if (!this.adj[nodeNumber]) {
            return;
        }
        this.adj[nodeNumber].forEach(function (i) {
            if (!vistedArray[i]) {
                _this._dfsAdjRecursive(i, vistedArray);
            }
        });
    };
    AjacancyListGraph.prototype._dfsMatrixRecusive = function (nodNumber, visitedArray) {
        var _this = this;
        visitedArray[nodNumber] = true;
        console.log(nodNumber + ' ->');
        if (!this.matrix[nodNumber])
            return;
        this.matrix[nodNumber].forEach(function (on, index) {
            if (!on)
                return;
            console.log(nodNumber, index);
            if (!visitedArray[index]) {
                _this._dfsMatrixRecusive(index, visitedArray);
            }
            else {
                console.log('visted', index);
            }
        });
    };
    AjacancyListGraph.prototype.RescursiveAdjDFS = function () {
        var visited = [];
        console.log('RescursiveAdjDFS');
        console.log(this.adj);
        this._dfsAdjRecursive(0, visited);
    };
    AjacancyListGraph.prototype.RecursiveMatrixDFS = function () {
        var visited = [];
        console.log('RecursiveMatrixDFS');
        console.log(this.matrix);
        this._dfsMatrixRecusive(0, visited);
    };
    AjacancyListGraph.prototype.StackAdjDFS = function () {
        var visited = [true];
        var stack = __spreadArrays(this.adj[0]);
        console.log('StackAdjDFS');
        console.log('0 -> ');
        while (stack.length !== 0) {
            var node = stack.pop();
            console.log('remove stack', stack);
            if (!visited[node]) {
                visited[node] = true;
                console.log(node + ' -> ');
                if (this.adj[node] && this.adj[node].length > 0) {
                    //can optimize by filters those that are already visted.
                    stack = __spreadArrays(stack, this.adj[node]);
                    console.log('add stack', stack);
                }
            }
        }
    };
    AjacancyListGraph.prototype.StackMatrixDFS = function () {
        var visited = [false];
        var stack = [0];
        console.log('StackMatrixDFS');
        console.log('0 -> ');
        while (stack.length !== 0) {
            var node = stack.pop();
            console.log('remove stack', stack);
            if (!visited[node]) {
                visited[node] = true;
                console.log(node + ' -> ');
                if (this.matrix[node] && this.matrix[node].length > 0) {
                    //can optimize by filters those that are already visted.
                    var adjNodes = this.matrix[node].map(function (i, idx) { return i === 1 ? idx : null; }).filter(function (x) { return x; });
                    stack = __spreadArrays(stack, adjNodes);
                    console.log('add stack', stack);
                }
            }
        }
    };
    AjacancyListGraph.prototype.AdjListBFS = function () {
        var queue = [0];
        var visited = [];
        while (queue.length !== 0) {
            var dequeued = queue.shift();
            if (dequeued !== undefined) {
                if (!visited[dequeued]) {
                    console.log(dequeued, ' ->');
                    visited[dequeued] = true;
                    // filter for civisted before adding to queue
                    if (this.adj[dequeued])
                        queue = __spreadArrays(queue, this.adj[dequeued]);
                }
            }
        }
    };
    AjacancyListGraph.prototype.MatrixBFS = function () {
        var queue = [0];
        var visited = [];
        while (queue.length !== 0) {
            var dequeued = queue.shift();
            if (dequeued !== undefined) {
                if (!visited[dequeued]) {
                    console.log(dequeued, ' ->');
                    visited[dequeued] = true;
                    // filter for civisted before adding to queue
                    var node = this.matrix[dequeued];
                    if (node) {
                        var nodeEdges = this.matrix[dequeued]
                            .map(function (i, idx) { return i === 1 ? idx : null; })
                            .filter(function (x) { return x !== null; });
                        queue = __spreadArrays(queue, nodeEdges);
                    }
                }
            }
        }
    };
    return AjacancyListGraph;
}());
exports.AjacancyListGraph = AjacancyListGraph;
