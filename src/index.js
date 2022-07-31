module.exports = function toReadable(number) {
  
    const numbersStringArray = [];

    const storageNumbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    };

    if (number === 0) {
        numbersStringArray.push(storageNumbers[0])
    }

    const numberHundreds = (number - number % 100) / 100;
    if (numberHundreds > 0) {

        numbersStringArray.push(storageNumbers[numberHundreds] + ' hundred')

    }

    const newNumber = number - (numberHundreds * 100);

    if (newNumber <= 19 && newNumber > 0) {
        numbersStringArray.push(storageNumbers[newNumber]);
      
    }

    if (newNumber > 19 && newNumber > 0) {
        const remainderNewNumber = newNumber % 10;
        const differenceNumber = newNumber - remainderNewNumber;
        numbersStringArray.push(storageNumbers[differenceNumber])
       if (remainderNewNumber !=0 ) {
        numbersStringArray.push(storageNumbers[remainderNewNumber])
    }
       
    }
    

    return numbersStringArray.join(' ');

}


