// const test = () => {
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve('asd')
//         },1000)
//     })
// }
// test().then(res => {
//     console.log(res)
// })

const pro = new Promise((resolve) => {
    setTimeout(() => {
        resolve('1111');
    }, 1000);
});
const fn = async () => {
    const res = await pro;
    console.log('asdasdas');
    console.log(res);
};

fn().then((v) => console.log(v));


let a = 5;
const b = 10;
let input = [1,2,3];
input.map(item => item+1);


function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);