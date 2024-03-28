/** Node: node for a singly linked list. */



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      //if this new node does not exist make it the head + tail since its one val
      this.head = newNode;
      this.tail = newNode
    }
    //this thing that is next (tail.next) to tail is the new node with that new node val aka newNode
    //than this.tail is the new node , offically sets since its the new node to be the new tail
    this.tail.next = newNode;
    //point this.next  is the new tail and = that new node
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
     const newNode = new Node(val);
     if(!this.head){
      //if this new node does not exist make it the head + tail since its one val
      this.head = newNode;
      this.tail = newNode;
     }
     else{
          //new node . next is the current head
          newNode.next = this.head
          //that current head prev spot is now the new node position(brought to front of list)
          this.head.prev = newNode;
          //this head is now offically the new node val
          this.head = newNode
     }
     
  }

  /** pop(): return & remove last item. */

  pop() {
     if(!this.head){
       console.error("list is empty")
       return
     }
     //val we are looking to pop, tail
     const poppedVal = this.tail;
     //pops if only one is in list/sets to null to pop
     if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return poppedVal
     }
     // not so good exp: tail is now thing prev to that tail 
     //pops for other cases, this tail = the previous tail since its becoming/is the new tail
     this.tail = this.tail.prev;
     //setting to null so theres nothing else after 
     this.tail.next = null;
     return poppedVal
  }

  /** shift(): return & remove first item. */

  

  shift() {
    const shiftedVal = this.head;
    //if theres one item in list remove it
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return shiftedVal
     }
     //assigns the next head after being removed
     //puts head to next head than sets that prev head to null
     this.head = this.head.next;
     this.head.prev = null
     return shiftedVal
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
     let currentNode = this.head;
     let index = 0;
     while(currentNode !== null){
      if(idx === index){
        //if target idx return that node
        return currentNode;
      }
      //counts over nodes
      currentNode = currentNode.next
      index++
     }
     return null //return currentNode
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    
    let curremtNode = this.head;
    let index = 0;
    
    //chewcks if inputed idx is greater
    
    while(curremtNode !== null){
     //if index is idx set currentNode at that index val to vaL
      if( idx === index){
         curremtNode.val = val
         return curremtNode
      }else{
        console.error("invalid index")
      }
      //counts,next by next
      curremtNode = curremtNode.next
      index++
  }
    return null //nothing
  }
  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //reffer to remove at and push
    const newNode = new Node(val);
    let previousNode = null
    let currentNode = this.head
    let index = 0
   //if the inputed idx is zero use our unshift method
    if(idx === 0) return this.unshift().val;
    //checks if idx is invalid
    if(idx < 0 || idx >= this.length) console.error("this idx does not exsist in list")
    //while loop index is less than inputed = search
    while(index < idx){
      //assign prev node to currentNode 
         previousNode = currentNode
         //move current to next current
         currentNode = currentNode.next
         //increments list index
         index++
     }
     //previousNode to next to be newNode 
     previousNode.next = newNode;
     //assigns next of newNode to be the currentNode/ keeps our place and points pointers 
     newNode.next = currentNode;
     //increment length of list
     this.length++
  }
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //if index is first use our shift method
     if(idx === 0) return this.shift().val;
     //if index is the last use our pop method
     if(idx === this.length-1) return this.pop().val
     // if this index is out of range console.error
     if(idx < 0 || idx >= this.length) console.error("this idx does not exsist in list")
     let previousNode = null
     let curremtNode = this.head
     //while idx is greater than 0 but also while its a valid node, so we dont get error for .next at curremtNode = curremtNode.next
     while(idx>0 && curremtNode){
      //sets the prev node to current node to keep track of traversing,changes it from null
      previousNode = curremtNode;
      //goes to next node
      curremtNode = curremtNode.next
      //going back iterating and keeping track of traversal
      idx--
      
     }
     if(!curremtNode){
      return undefined
     }
     //set previous nodes next to current nodes next to fill gap and move onto target we skipped over
     previousNode.next = curremtNode.next;
     //removes node in list
     this.length--
     
     return curremtNode.val
     
    }
    
  

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      console.error("list is empty")
      return 0
    }
    let currentNode = this.head
    let count = 0
    let avgSum = 0
   
    while(currentNode !== null){
      //adds value of each num in list to avgSum
      avgSum += currentNode.val
      //counts and goes onto next node
      count++
      currentNode = currentNode.next
    }
    //return as avg
    const average = avgSum/count;
    return average
  }

}


//isnt while(currentNode) the same as while(currentNode !== null) since nulll is falsly? 



//module.exports = LinkedList;
