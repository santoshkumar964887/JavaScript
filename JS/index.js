let arr = ['apple', 'appleapple', 'app', 'ahash', 'sdjhjh'];
let target = document.querySelector('.input');
// const myFunction = () => {
//   let suggestion = document.querySelector('.suggestion');
//   // let div = document.createElement('div');
//   // let suggested = arr.filter((el, index) =>
//   //   el.toLowerCase().startsWith(index.val)
//   // );
//   // div.innerHTML = '';
//   console.log(suggestion, '.........??');
// };

function fun() {
  console.log(target.value, '..........???');
}
const myFunction = throttling(fun, 2000);

// function debounce(fn, time) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, [...args]);
//     }, time);
//   };
// }

function throttling(fn, time) {
  let flag = true;
  return function (...args) {
    if (flag == true) {
      flag = false;
      fn.apply(this, [...args]);
      timer = setTimeout(() => {
        flag = true;
      }, time);
    }
  };
}
