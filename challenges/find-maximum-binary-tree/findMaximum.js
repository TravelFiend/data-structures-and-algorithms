class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        let currentNode;

        if(!this.root) {
            this.root = newNode;
        }

        currentNode = this.root;

        while(currentNode) {
            if(data < currentNode.data) {
                if(!currentNode.left) {
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

        while(currentNode) {
            if(data === currentNode.data) {
                return true;
            } else if(data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    pre(root) {
        const arr = [];
        if(root) {
            arr.push(root.data);
            this.pre(root.left);
            this.pre(root.right);
        }
        return arr;
    }

    post(root) {
        const arr = [];
        if(root) {
            arr.push(root.data);
            this.post(root.left);
            this.post(root.right);
        }
        return arr;
    }

    in(root) {
        const arr = [];
        if(root) {
            arr.push(root.data);
            this.in(root.left);
            this.in(root.right);
        }
    }

    preOrder() {
        return this.pre(this.root);
    }

    postOrder() {
        return this.post(this.root);
    }

    inOrder() {
        return this.in(this.root);
    }

    breadthFirst() {
        const results = [];
        let queue = [];
        queue.push(this.root);

        while(queue.length > 0) {
            results.push(queue[0].data);
            if(queue[0].left) {
                queue.push(queue[0].left);
            } else if(queue[0].right) {
                queue.push(queue[0].right);
            } else {
                queue.shift();
            }
        }
        return results;
    }

    findMaximumValue(){
        let currentNode = this.root;
        if(currentNode) {
            return;
        }
        while(currentNode.right){
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
}
