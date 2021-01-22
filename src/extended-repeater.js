const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result ="";

  if(!options.separator)
    options.separator = '+';
  if(!options.additionSeparator)
    options.additionSeparator = '|';

  if(!options.repeatTimes)
    options.repeatTimes = 1;
  if(!options.additionRepeatTimes)
    options.additionRepeatTimes = 1;
  

  for (let i =0; i< options.repeatTimes; i++){
    result = result + str ;
    if(options.addition || options.addition===false || options.addition===null){
    for (let r =0; r<options.additionRepeatTimes;r++){
      result += options.addition;
      if(r+1!==options.additionRepeatTimes){
        result += options.additionSeparator;
      }
    }
    r=0;
  }
    if(i+1!= options.repeatTimes){
      result += options.separator;
     }
  }
  return result;
};
  
