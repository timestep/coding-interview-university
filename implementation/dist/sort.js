"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quicksort = exports.MergeSort = void 0;
var MergeSort = function (array) {
    if (array.length === 1)
        return array;
    var leftArray = array.slice(0, Math.floor(array.length / 2));
    var rightArray = array.slice(Math.floor(array.length / 2), array.length);
    var leftMerge = MergeSort(leftArray);
    var rightMerge = MergeSort(rightArray);
    var merge = function (leftArray, rightArray) {
        var temp = [];
        var i = 0; //max to leftArray.lenght
        var j = 0; //max to rightArray.length
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] < rightArray[j]) {
                temp.push(leftArray[i]);
                i++;
            }
            else {
                temp.push(rightArray[j]);
                j++;
            }
        }
        while (i <= leftArray.length - 1) {
            temp.push(leftArray[i]);
            i++;
        }
        while (j <= rightArray.length - 1) {
            temp.push(rightArray[j]);
            j++;
        }
        return temp;
    };
    // find mid of array.
    // take left, and right 
    // then merge sort on them
    return merge(leftMerge, rightMerge);
};
exports.MergeSort = MergeSort;
var Quicksort = function (array) {
    // not inplace
    // choose pivot
    // check start and end of array to pivot
    // make sure start/end is on right or left of pivot for gt or ls
    // swap if fail
    // iterate from start to end toware middle
    // check
    //  when start/end meet middle
    // split array and sort again.
    var i = 0;
    var partition = function (arr) {
        if (arr.length < 2)
            return arr;
        var idx = Math.floor(arr.length / 2);
        var pivot = arr[idx];
        var lte = 0;
        var gte = arr.length - 1;
        while (lte < gte) {
            while (arr[lte] < pivot) {
                if (lte >= idx)
                    break;
                lte++;
            }
            while (arr[gte] > pivot) {
                if (gte <= idx)
                    break;
                gte--;
            }
            if (lte < gte) {
                var swap = arr[lte];
                arr[lte] = arr[gte];
                arr[gte] = swap;
                lte++;
                gte--;
            }
        }
        return lte;
    };
};
exports.Quicksort = Quicksort;
