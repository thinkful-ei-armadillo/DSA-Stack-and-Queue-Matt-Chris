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
    if(this.top === null) {
      this.top = new _Node(data,null);
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

// Exercises for stacks

function peek(ss){
  return ss.top;
}

function isEmpty(ss){
  return ss.top ? false : true;
}

function display(ss) {
  const ele = [];
  let tempStack = new Stack();

  while(ss.top) {
    let temp = ss.pop();
    ele.push(temp);
    tempStack.push(temp);
  }

  while(tempStack.top){
    let back = tempStack.pop();
    ss.push(back);
  }

  return ele;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const wordStack = new Stack();
  let rWord = '';

  for(let i = 0; i < s.length; i++){
    wordStack.push(s[i]);  
  }

  while(wordStack.top) {
    rWord += wordStack.pop()
  }

  return s === rWord ? true : false;
}

function main(){

  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // console.log(display(starTrek));
  // console.log(is_palindrome('accar'))
}

main();