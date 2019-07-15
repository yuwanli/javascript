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

// const throttle = (fn, delay, mustRun) => {
//     let time = Date.now();
//     return function(...args) {
//         const _this = this
//         if (Date.now() - time >= delay){
//             fn.apply(_this,args)
//             time = Date.now()
//         }
//     }
// }

const throttle = (fn, delay, mustRun) => {
    var timeout, context, args, result;
    var previous = 0;

    var later = function() {
        previous = +new Date();
        timeout = null;
        fn.apply(context, args)
    };

    var throttled = function() {
        var now = +new Date();
        var remaining = delay - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            fn.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}

export {
    debounce,
    throttle
}