const helpFunction = node => {
    if(node){
        if(node.data % 15 === 0){
            node.data = 'FizzBuzz';
        } else if(node.data % 5 === 0){
            node.data === 'Buzz';
        } else if(node.data % 3 === 0){
            node.data === 'Fizz';
        } else {
            node.data.toString();
        }
    }
    this.helpFunction(node.left);
    this.helpFunction(node.right);
};

export const FizzBuzzTree = tree => {
    return helpFunction(tree.root);
};
