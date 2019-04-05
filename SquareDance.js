// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

}

function squareDance(arr) {
  const men = new Queue();
  const women = new Queue();
  let menCounter = 0;
  let womenCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'f') {
      women.enqueue(arr[i])
      womenCounter++;
    }
    else {
      men.enqueue(arr[i])
      menCounter++;
    }
  }

  let message = '';
  while (men.first !== null && women.first !== null) {
    message = message + men.dequeue() + ' is paired with ' + women.dequeue() + '\n';
    menCounter--;
    womenCounter--;
  }


  return ((menCounter === 0 && womenCounter === 0) ?
    message : (`${message} there is ${menCounter ?
      menCounter + ' men alone =(' : womenCounter + ' women alone =('}`)
  );
}


function main() {
  const data = ['m', 'm', 'f', 'f','m']

  console.log(squareDance(data))
}

main();