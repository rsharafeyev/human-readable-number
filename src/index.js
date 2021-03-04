module.exports = function toReadable (number) {
    let result = '';
    let numStr = [];
    numStr[0] = 'zero';
    numStr[1] = 'one';
    numStr[2] = 'two';
    numStr[3] = 'three';
    numStr[4] = 'four';
    numStr[5] = 'five';
    numStr[6] = 'six';
    numStr[7] = 'seven';
    numStr[8] = 'eight';
    numStr[9] = 'nine';
    numStr[10] = 'ten';
    numStr[11] = 'eleven';
    numStr[12] = 'twelve';
    numStr[13] = 'thirteen';
    numStr[14] = 'fourteen';
    numStr[15] = 'fifteen';
    numStr[16] = 'sixteen';
    numStr[17] = 'seventeen';
    numStr[18] = 'eighteen';
    numStr[19] = 'nineteen';

    numStr[20] = 'twenty';
    numStr[30] = 'thirty';
    numStr[40] = 'forty';
    numStr[50] = 'fifty';
    numStr[60] = 'sixty';
    numStr[70] = 'seventy';
    numStr[80] = 'eighty';
    numStr[90] = 'ninety';
    
    numStr[100] = 'hundred';
    
    if (number == 0)
        return numStr[0];
    if (number > 99)
    {
        result += numStr[Math.floor(number/100)] + ' ' + numStr[100];
        number = number % 100;
        if (number != 0)
            result += ' ';
    }
    if (number > 19)
    {
        result += numStr[Math.floor(number/10)*10];
        number = number % 10;
        if (number != 0)
            result += ' ';
    }
    if (number > 0 && number <20)
    {
        result += numStr[number];
    }
    return result;
}
