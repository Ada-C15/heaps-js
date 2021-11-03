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
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  add(key, value = key) {

    const node = new HeapNode(key, value);
    this.store.push(node);
    if (this.store.length > 1) {
      this.heapUp(this.store.length - 1);
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  remove() {
    if (this.store.length == 0) {
      return;
    }

    this.swap(0, (this.store.length - 1))
    const lastNode = this.store.pop();
    this.heapDown(0);

    return lastNode.value
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
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return this.store.length === 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(log n)
  heapUp(index) {

    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.store[parentIndex];
    const childNode = this.store[index];

    if (childNode.key < parentNode.key) {
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
    const leftNode = 2 * index + 1
    const rightNode = 2 * index + 2
    let smallest = index;

    if(leftNode < this.store.length && this.store[leftNode].key < this.store[smallest].key) {
      smallest = leftNode;
    }

    if (rightNode < this.store.length && this.store[rightNode].key < this.store[smallest].key) {
      smallest = rightNode;
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
