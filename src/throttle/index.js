import {throttle} from '../../utils/utils'

var count = 1;
var container = document.getElementById('container');
var button = document.getElementById('button');

function getUserAction(a,b) {
    container.innerHTML = count++;
};

const throttleFn = throttle(getUserAction, 1000, 2000);

container.onmousemove = throttleFn;
button.addEventListener('click', function(){
    debounceFn.cancel();
})