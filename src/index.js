module.exports = function toReadable(number) {
  
    const numbersArray = [];

    const storageNumbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    };

   if (number === 0) {
    numbersArray.push(storageNumbers[0]);
   }

   const numberHundred = (number - number % 100) / 100;
   
   if (numberHundred > 0){
    numbersArray.push(storageNumbers[numberHundred] + ' hundred');
   }

   const newNumber = number - (numberHundred * 100);

   if (newNumber > 19 && newNumber > 0) {
    const remainderNewNumber = newNumber % 10;
    const differenceNumbers = newNumber - remainderNewNumber;
    numbersArray.push(storageNumbers[differenceNumbers]);
    if (remainderNewNumber !=0) {
        numbersArray.push(storageNumbers[remainderNewNumber]);
    
      }
  }

  if (newNumber <=19 && newNumber > 0) {
    numbersArray.push(storageNumbers[newNumber]);
  }

   return numbersArray.join(' ')

}


