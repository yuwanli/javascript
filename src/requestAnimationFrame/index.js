var $count = document.getElementById('count')
var count = 0;
var time = Date.now()
function addCount() {
    // setTimeout(() => {
    //     count += 1
    //     $count.innerHTML = count
    //     addCount()
    // },1000)
    window.requestAnimationFrame(() => {
        if (Date.now() - time >= 1 * 1000){
            time = Date.now();
            count += 1
            $count.innerHTML = count
        }
        addCount()
    })
}
addCount()