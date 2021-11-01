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
  // Time Complexity: ?
  // Space Complexity: ?
  add(key, value = key) {

    const node = new HeapNode(key, value);
    this.store.push(node);
    if (this.store.length > 1 ){
    this.heapUp(this.store.length- 1 );
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    pass
    if (this.store.length == 0){
      return None
    }



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
    throw new Error("Method not implemented yet...");
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {

    const parentIndex = Math.floor((index - 1)/2);
    const parentNode = this.store[Math.floor((index - 1)/2)];
    const childNode = this.store[index];

    if ( childNode.key < parentNode.key ){
      this.swap(index, parentIndex);
      if (parentIndex > 0){
      this.heapUp(parentIndex)
      }
    }
  }


  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {

  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }

  getParentIndex(index){
    return Math.floor((index-1)/2)
}
}
module.exports = {
  MinHeap
};
