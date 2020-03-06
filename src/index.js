
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return[];
}
let arr = [];
for (let i = 0; i < matrix.length; i++) {
    let arr1 = [...matrix[i]];
    if (i % 2!=0) {
        arr1.reverse();
    }
    arr.push(...arr1);
}
return arr;
}
