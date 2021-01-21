const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let counts = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(3600 / turnsSpeed * counts);
  let res = {
    turns: counts,
    seconds: time
  };
  res.turns = counts;
  res.seconds = time;
  return res;
};
