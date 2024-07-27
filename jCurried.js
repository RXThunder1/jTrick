function curriedAdd(value = 0) {
    function adder(newValue) {
        if (newValue === undefined) {
            return value;
        }
        return curriedAdd(value + newValue);
    }
    return adder;
}

// Example usage:
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16