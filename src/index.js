module.exports = function toReadable (number) {
    const numArr = number.toString().split('');
    const numLength = numArr.length;
    const TXT_NUMBER = [
        numbers = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
      
        dozens = {
            1: 'ten',
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        }
    ]
  
    let operand = numArr.slice();
    let tens = '';
    let hundreds = '';
    let thousands = '';
    let result = '';
  
    function convertDozens(Arr) {
      if (Arr[0] == 0) {
          tens = TXT_NUMBER[0][parseFloat(Arr[1])];
          return;
      }  
      if (Arr[0] == 1) {
          if (Arr[1] == 0) {
              tens = TXT_NUMBER[1][1];
          } else {
              tens = TXT_NUMBER[0][parseFloat(Arr.join(''))];
          }
      } else {
          if (Arr[1] == 0) {
              tens = TXT_NUMBER[1][parseFloat(Arr[0])];
          } else {
              tens = `${TXT_NUMBER[1][parseFloat(Arr[0])]} ${TXT_NUMBER[0][parseFloat(Arr[1])]}`
          }
      }
    }
  
    function convertHundreds() {
        let getDozens = [];
        getDozens.push(operand[1], operand[2]);
    
        if (number % 10 === 0 && numArr[1] == 0) {
            hundreds = `${TXT_NUMBER[0][parseFloat(numArr[0])]} hundred`;
            result = hundreds;
        } else {
            hundreds = `${TXT_NUMBER[0][parseFloat(numArr[0])]} hundred`;
            convertDozens(getDozens);
            result = `${hundreds} ${tens}`;
        }
        return result;
    }
  
    switch (numLength) {
        case 1:
          return TXT_NUMBER[0][number];
        case 2:
          convertDozens(numArr);
          return tens;
        case 3:
          convertHundreds();
          return result;
    }
}
