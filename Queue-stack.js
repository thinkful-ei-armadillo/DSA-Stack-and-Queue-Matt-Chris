class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class Queue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    const node = new _Node(data);

    this.stack1.push(node);
  }

  dequeue() {
    
    while(this.stack1.top !== null){
      this.stack2.push(this.stack1.pop())
    }
    let val = this.stack2.pop()

    while(this.stack2.top !== null){
      this.stack1.push(this.stack2.pop())
    }
    return val;
  }
}

function main() {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.dequeue()
  q.enqueue(3);
  q.enqueue(3);
  q.enqueue(3);

  console.log(q.stack1)
}

main();