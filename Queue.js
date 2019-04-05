'use strict';

class _Node {
  constructor(value) {
    this.value=value; 
    this.next=null; 
    this.previous=null; 
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
      node.previous = this.last; 
    }

    this.last = node; 
  }

  dequeue(){
    if (this.first === null) {
      return; 
    }
    const node = this.first; 
    this.first.next.previous = null;
    this.first = this.first.next; 
    if(node === this.last){
      this.last = null; 
    }
    return node.value; 
  }
}

function main(){
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.dequeue(); 
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
}


function peek(queue){
  return queue.first; 
}

function isEmpty(queue){
  return queue.first && queue.last ? true : false;  
}

function display(queue){
  let temp = [];
  while(queue.first !== null){
    temp.push(queue.dequeue()); 
  }
  for (let i = 0; i < temp.length; i++) {
    queue.enqueue(temp[i]); 
  }
  return temp; 
}


function displayBack(queue){
  let temp = [];
  while(queue.last !== null){
    temp.push(queue.dequeue()); 
  }
  for (let i = 0; i < temp.length; i++) {
    queue.enqueue(temp[i]); 
  }
  return temp; 
}



main(); 

