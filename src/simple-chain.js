const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res : [],
  getLength() {
    return this.res.length;
  },




  
  addLink(value) {
    this.res.push("( " + value + " )");
    return this;
  },


  removeLink(position) {
    if(typeof position!="number" || position>this.res.length ||  position<1){
      this.res = [];
      throw new Error ('Mistake');
    }
    this.res.splice(position-1,1);
    return this;
  },


  reverseChain() {
    this.res.reverse();
    return this;
  },


  finishChain() {
    let result ="";
    result = this.res.join('~~');
    this.res=[];
    return result;

  }
};

module.exports = chainMaker;
