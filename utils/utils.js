const debounce = (fn, delay, immediate) => {
    let timer,result;
    const resFn = function(...args) {
        const _this = this
        timer && clearTimeout(timer);
        if (immediate){
            const canRun = !timer
            timer = setTimeout(() => {
                timer = null
            },delay)
            if (canRun){
                result = fn.apply(_this, args)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(_this, args)
            },delay)
        }
        return result
    }

    resFn.cancel = () => {
        clearTimeout(timer)
        timer = null
    }

    return resFn
}

export default {
    debounce
}