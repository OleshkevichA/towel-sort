
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let b = [];
    if (!matrix){
        return [];
    }
    for (let i = 0; i < matrix.length; i++){
        if (i % 2 != 0){
            b.push(matrix[i].reverse());
        }
        else {
            b.push(matrix[i]);
        }
    }
  return b.flat() ;
}
