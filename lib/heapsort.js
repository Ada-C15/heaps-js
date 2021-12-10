import MinHeap from "./minheap";

// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  let heap = new MinHeap;

  while(!heap.isEmpty()) {
    list.push(heap.remove());
  }  
};

module.exports = heapsort;
