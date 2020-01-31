class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data){
        const newNode = new Node(data);
        let currentNode;

        if(!this.root){
            this.root = newNode;
        }

        currentNode = this.root;

        while(currentNode) {
            if(data < currentNode.data){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    currentNode = newNode.left;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    currentNode = newNode.right;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    contains(data) {
        let currentNode = this.root;
        
        while(currentNode){
            if(data === currentNode.data) {
                return true;
            } else if(data < currentNode.data){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}
