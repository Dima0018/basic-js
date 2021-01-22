const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    (type === false) ? this.type = 'reverse' :  this.type = 'direct';
  }
 
      encrypt(text, key) {
        if (text === undefined || key === undefined) throw Error();
        let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let keyLong = key;
        let cryptedArr = [];
            while (keyLong.length < text.length) {
              keyLong += key;
            }
        
        let textArr = text.toUpperCase().split('');
        let keyArray = keyLong.toUpperCase().split('');
      
            for (let i = 0; i < textArr.length; i++) {
            function checkIndexMes(index) {
        return index === textArr[i]
        }
        let messageNumb = alfabet.findIndex(checkIndexMes);
            if (messageNumb === -1) {
              keyArray.splice(i, 0, textArr[i]);
              cryptedArr.push(textArr[i]);
            } else {
              function checkIndexKey(index) {
                return index === keyArray[i]
                }
              let keyNumb = alfabet.findIndex(checkIndexKey);
              let sum = messageNumb + keyNumb;
              while (sum > 25) {
                sum = Math.abs(sum - 26);
              }
              cryptedArr.push(alfabet[sum]);
            }
            }
            if (this.type === 'direct') {
              return cryptedArr.join('');
            } else {
          let reversedArr = [];
              for (let i = cryptedArr.length; i >= 0; i--){
              reversedArr.push(cryptedArr[i]);
              } 
          return reversedArr.join('')  
        }
      }    
  decrypt(text, key) {
    if (text === undefined || key === undefined) throw Error();
    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyLong = key;
    let deCryptedArr = [];
    let sum;
        while (keyLong.length < text.length) {
          keyLong += key;
        }
    let textArr = text.toUpperCase().split('');
    let keyArray = keyLong.toUpperCase().split('');
    for (let i = 0; i < textArr.length; i++) {
        function checkIndexMes(index) {
        return index === textArr[i]
        }
      let messageNumb = alfabet.findIndex(checkIndexMes);
      if (messageNumb === -1) {
        keyArray.splice(i, 0, textArr[i]);
        deCryptedArr.push(textArr[i]);
          } else {
            function checkIndexKey(index) {
              return index === keyArray[i]
              }
            let keyNumb = alfabet.findIndex(checkIndexKey);
            if (messageNumb > keyNumb) { 
            sum = Math.abs(messageNumb - keyNumb)
            } else {
            sum = Math.abs(messageNumb + 26 - keyNumb)
            }
            while (sum > 25) {
              sum = Math.abs(sum - 26);
            }
            deCryptedArr.push(alfabet[sum]);
          }
    }
    if (this.type === 'direct') {
      return deCryptedArr.join('');
    } else { 
      let reversedArr = [];
          for (let i = deCryptedArr.length; i >= 0; i--){
          reversedArr.push(deCryptedArr[i]);
          } 
      return reversedArr.join('');  
      
    }
}
}
module.exports = VigenereCipheringMachine;
