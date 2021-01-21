const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let checkMembers = [];
  if(!Array.isArray(members) || members.length===0){
    return false;
  }
  for(let i=0; i < members.length; i++){
    if (typeof members[i]==="string"){
      checkMembers.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  let res = "";
  checkMembers.sort();
  for(let i=0; i<checkMembers.length; i++){
    res += checkMembers[i][0];
  }
  return res;
};
