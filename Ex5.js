function isArmstrong(number)
{
    const digits = [];
    const allDigits = number.toString();
    const numberLength = allDigits.length;
    for(let i = 0; i < numberLength; i++) {
        digits.push(+allDigits.charAt(i));
    }
    let sum = 0;
    for(let i = 0; i < numberLength; i++) {
        sum += Math.pow(digits[i], numberLength);
    }
    
    if(sum===number)
    {
        return true
    }
    else
    {
        return false;
    }

}
console.log(isArmstrong(15))