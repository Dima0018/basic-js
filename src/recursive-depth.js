const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
    let dep = 1
      
    for(let i of arr){
    let num = 1;
      if (Array.isArray(i)){
        num = num +  this.calculateDepth(i);
        if(num>dep){
          dep = num;
        }

      }

  }
    return dep;
    
    
  }
};
