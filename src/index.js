function eval() {
    // Do not use eval!!!
    return;
}
// Решение с контруктором, переработать позже
function expressionCalculator(expr) {
    console.log(expr.replace(/ /gi, "").split(''));
    checkbrack(expr);
    dividezero(expr);
    let finalresult = new Function('return ' + expr);
    return finalresult();
}

function checkbrack(str) {
    const pairs = {[')']: '('};
    let ob = ['('];
    let string = str.replace(/ /gi, "").split('').filter(el => (el===')'||el==='('));
    let stack = [];
    for (let i=0; i<string.length; i+=1) {
        let brack = string[i];
        if (ob.includes(brack)) {
            stack.push(brack);
        } else {
            if (stack.length === 0) {
                throw 'ExpressionError: Brackets must be paired';
            } else {
                if (stack[stack.length-1] === pairs[brack]) {
                    stack.pop();
                } else {
                    throw 'ExpressionError: Brackets must be paired';
                }
            }
        }
    }
    if (stack.length !== 0) {
        throw 'ExpressionError: Brackets must be paired';
    };
}

function dividezero (str) {
    let x = str.replace(/ /gi, "").split('');
    for (let i=0;i<x.length;i+=1) {
        if (x[i] === '/' && x[i+1]=== '0') {
            throw 'TypeError: Division by zero.';
        }
    }
}

module.exports = {
    expressionCalculator
}