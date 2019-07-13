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

const throttle = (fn, delay, mustRun) => {
    let time = Date.now();
    return function(...args) {
        const _this = this
        if (Date.now() - time >= delay){
            fn.apply(_this,args)
            time = Date.now()
        }
    }
}

export {
    debounce,
    throttle
}