import {extend} from '../../utils/utils'

const test1 = {
    num: 1,
    str: 'hello world',
    null_val: null,
    undefined_val: undefined,
    normal_arr: [1,2,3],
    arr2: [[1,2],[3,4],[5,6]],
    obj: {
        num: 2,
        str: 'hello world2',
    },
    obj_arr:[{
        num: 3,
        str: 'hello world3'
    }]
}
const res = {
    self_num: 2
}

// const testArray = [1,2,3]

console.log(extend(res,test1))

test1.obj.num = 100