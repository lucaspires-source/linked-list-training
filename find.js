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
const linkedListFind = (head, target) =>{
    let current = head
    while (current !== null) {
        if (current.val === target) {
            console.log("target found:" + target)
            return true
        }
        current = current.next
    }
    console.log("target not found:" + target)
    return false
}

*/

//recursive 

const linkedListFind = (head, target) =>{
    if(head === null) return false
    if (head.val === target) return true
    linkedListFind(head.next, target)
}


linkedListFind(a, 7)
