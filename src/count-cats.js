const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
  let res =0;
  if (matrix.length ==0 || !matrix){return 0;}
  for ( let i = 0; i< matrix.length; i++){
    for(let r =0; r< matrix[i].length; r++){
      if(matrix[i][r]=="^^"){res++}
    }
  }
  return res;
};
