var myAtoi = function(str) {
    if (!str){
        return 0
    }
    const reg = /^\s*(\D)?(\d+).*/
    const res = str.match(reg)
    if (!res || (res[1] && !~['-','+'].indexOf(res[1]))){
        return 0
    }
    let result = +res[2];
    if (res[1] === '-'){
        result =  -1 * (+res[2])
    } 
    if (result > Math.pow(2,31) - 1) {
        result = Math.pow(2,31) - 1
    }
    if (result < Math.pow(-2,31)) {
        result = Math.pow(-2,31)
    }
    return result
};
console.log(myAtoi('   -42'))