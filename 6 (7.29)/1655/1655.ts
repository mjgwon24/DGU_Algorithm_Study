/**
 * 가운데를 말해요
 * 문제: 정수가 주어질때마다 해당 수 중에서 중간값을 출력한다. 만약 중간값이 두개라면 두 수 중 작은 수를 출력한다.
 * 입력: 첫째 줄에는 수의 개수 N이 주어진다. N은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수이다. 그 다음 N줄에 걸쳐 정수가 주어진다.
 * 출력: 한 줄에 하나씩 중간값을 출력한다.
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(inputs[0]);
const numbers = inputs.slice(1).map(v => parseInt(v));
const minHeap = [];
const maxHeap = [];

/**
 * 배열의 두 값을 교환
 * @param array
 * @param a
 * @param b
 */
function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

/**
 * 최소힙에 값을 삽입
 * @param value
 */
function insertMinHeap(value) {
    minHeap.push(value);
    let index = minHeap.length - 1;
    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (minHeap[parent] <= minHeap[index]) break;
        swap(minHeap, parent, index);
        index = parent;
    }
}

/**
 * 최대힙에 값을 삽입
 * @param value
 */
function insertMaxHeap(value) {
    maxHeap.push(value);
    let index = maxHeap.length - 1;
    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (maxHeap[parent] >= maxHeap[index]) break;
        swap(maxHeap, parent, index);
        index = parent;
    }
}

/**
 * 최소힙에서 값을 삭제
 */
function deleteMinHeap() {
    const result = minHeap[0];
    minHeap[0] = minHeap[minHeap.length - 1];
    minHeap.pop();
    let index = 0;
    while (index * 2 + 1 < minHeap.length) {
        let child = index * 2 + 1;
        if (child + 1 < minHeap.length && minHeap[child] > minHeap[child + 1]) child++;
        if (minHeap[index] <= minHeap[child]) break;
        swap(minHeap, index, child);
        index = child;
    }
    return result;
}

/**
 * 최대힙에서 값을 삭제
 */
function deleteMaxHeap() {
    const result = maxHeap[0];
    maxHeap[0] = maxHeap[maxHeap.length - 1];
    maxHeap.pop();
    let index = 0;
    while (index * 2 + 1 < maxHeap.length) {
        let child = index * 2 + 1;
        if (child + 1 < maxHeap.length && maxHeap[child] < maxHeap[child + 1]) child++;
        if (maxHeap[index] >= maxHeap[child]) break;
        swap(maxHeap, index, child);
        index = child;
    }
    return result;
}

// 최소힙의 최상단 값 반환
function getMinHeapTop() {
    return minHeap[0];
}

// 최대힙의 최상단 값 반환
function getMaxHeapTop() {
    return maxHeap[0];
}

// 힙의 크기를 조절하여 중간값 유지
function balanceHeap() {
    if (minHeap.length > maxHeap.length + 1) {
        insertMaxHeap(deleteMinHeap());
    } else if (maxHeap.length > minHeap.length) {
        insertMinHeap(deleteMaxHeap());
    }
}

// 주어진 수를 힙에 삽입하고, 중간값을 출력
for (let i = 0; i < N; i++) {
    if (minHeap.length === 0 || getMinHeapTop() >= numbers[i]) {
        insertMinHeap(numbers[i]);
    } else {
        insertMaxHeap(numbers[i]);
    }
    balanceHeap();
    console.log(getMinHeapTop());
}

