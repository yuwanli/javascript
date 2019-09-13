/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (typeof x !== 'number'){
        return false
    }
    if (x < 0){
        return false
    }
    const numToStr = x.toString()
    const numToArr = numToStr.split('')
    if (numToStr === numToArr.reverse().join('')){
        return true
    }
    return false
};
isPalindrome(121)