import assert from "assert";

function nonUniqueElements(data) {
    return data.filter(a => data.indexOf(a) != data.lastIndexOf(a));
}

console.log('Example:')
console.log(nonUniqueElements([1, 2, 3, 1, 3]))

assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
