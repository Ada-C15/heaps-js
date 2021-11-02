const { MinHeap } = require("./minheap");


// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  const heap = new MinHeap();

  while (list.length > 0) {
    heap.add(list.pop());
  }

  while (!heap.isEmpty()) {
    list.push(heap.remove());
  }

  return list;
};

module.exports = heapsort;
