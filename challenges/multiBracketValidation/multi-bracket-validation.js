const multiBracketValidation = input => {
    const openRegex = /[[{(]/;
    const closedRegex = /[\]})]/;
    const inputArr = input.split('');
    const bracketArr = inputArr.filter(i => i.match(openRegex) || i.match(closedRegex));
    let openArr = [];
    let invalid = false;

    bracketArr.forEach(i => {
        if(openRegex.test(i)) {
            openArr.unshift(i);
        } else if((i === ')' && openArr[0] !== '(') || (i === '}' && openArr[0] !== '{') || (i === ']' && openArr[0] !== '[')) {
            invalid = true;
        } else {
            openArr.shift();
        }
    });

    return !invalid ? 'valid brackets' : 'invalid brackets';
};

export default multiBracketValidation;
