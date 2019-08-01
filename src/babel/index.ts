function* test() {
    const res1 = yield 1;
    const res2 = yield res1 + 1;
    const res3 = yield res2 + 1;
    const res4 = yield res3 + 1;
    const res5 = yield res4 + 1;
    yield res5 + 1;
}

const tt = test()
const button = document.getElementById('button')
const input = document.getElementById('input')
let before = null
button.addEventListener('click', () => {
    const inputValue = input.value
    before = tt.next(+inputValue || before).value
    input.value = ''
    console.log(before)
})
























































// function* test() {
//     const res1 = yield 1;
//     const res2 = yield res1 + 1;
//     const res3 = yield res2 + 1;
//     const res4 = yield res3 + 1;
//     const res5 = yield res4 + 1;
//     yield res5 + 1;
// }

// const tt = test()
// const button = document.getElementById('button')
// const input = document.getElementById('input')
// let before = null
// button.addEventListener('click', () => {
//     const inputValue = input.value
//     before = tt.next(+inputValue || before).value
//     input.value = ''
//     console.log(before)
// })
