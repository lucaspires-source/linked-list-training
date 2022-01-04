class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d
/*
const reverseList = (head) => {
    let prev = null
    let current = head 

    while (current !== null) 
    {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}
*/



  
//recursive  
const reverseList = (head, prev = null) => {
if (head === null ) return prev
const next = head.next
head.next = prev
return reverseList(next,head)
}
reverseList()