class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }
  // This method adds a HeapNode instance to the heap
  // Time Complexity: generally Log N
  // Space Complexity: equal to the nodes in the heap - 1

  add(key, value = key) {

    const node = new HeapNode(key, value);
    this.store.push(node);
    if (this.store.length > 1) {
      this.heapUp(this.store.length - 1);
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    if (!this.store.length) return;

    this.swap(0, this.store.length - 1);
    const removed = this.store.pop();
    this.heapDown(0);
    
    return removed.value;
  }


  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: ?
  // Space complexity: ?
  isEmpty() {
    return !this.store
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {

    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.store[parentIndex];
    const newNode = this.store[index];

    if (newNode.key < parentNode.key) {
      this.swap(index, parentIndex);
      if (parentIndex > 0) {
        this.heapUp(parentIndex)
      }
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    let smallest = index;

    if((left < this.store.length) && (this.store[left].key < this.store[smallest].key)) {
      smallest = left;
    }

    if ((right < this.store.length) && (this.store[right].key < this.store[smallest].key)) {
      smallest = right;
    }

    if (index !== smallest){
      this.swap(index, smallest);
      this.heapDown(smallest);
    }
  }


  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};
