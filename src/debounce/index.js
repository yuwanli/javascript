import {debounce} from '../../utils/utils'

var count = 1;
var container = document.getElementById('container');
var button = document.getElementById('button');

function getUserAction() {
    container.innerHTML = count++;
};

const debounceFn = debounce(getUserAction, 10000, true);

container.onmousemove = debounceFn;
button.addEventListener('click', function(){
    debounceFn.cancel();
})