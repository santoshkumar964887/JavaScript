// const obj = {
//   name: 'Santosh',
//   lname: 'Kumar',
// };

// function abc(a, b) {
//   console.log(this.name + ' ' + this.lname + ' ' + a + ' ' + b);
// }

// abc.bind(obj, 'ttt')('rr');

// Function.prototype.myBind = function (...args) {
//   let fn = this,
//     resArgs = args.slice(1);
//   return function (...args1) {
//     fn.apply(args[0], [...resArgs, ...args1]);
//   };
// };

// abc.myBind(obj, 'ttt')('rr');

// let arr = [1, 2, 3, 15, 4, 5];

// console.log(arr.reduce((curr, acc) => Math.max(curr, acc), 5));

// Array.prototype.myReduce = function (fn, initialValue) {
//   let arr = this,
//     ans = initialValue;

//   for (let val of arr) {
//     ans = fn(val, ans);
//   }

//   return ans;
// };

// console.log(arr.myReduce((curr, acc) => curr + acc, 5));

// function fn1() {
//   console.log('Calling from f1');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Calling from f1 timer');
//       resolve();
//     }, 3000);
//   });
// }
// function fn2() {
//   console.log('Calling from f2');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Calling from f2 timer');
//       resolve();
//     }, 3000);
//   });
// }

// fn1().then((res) => {
//   fn2().then(() => console.log('resolve'));
// });

function flat(arr) {
  ans = [];
  for (let val of arr) {
    if (typeof val == 'number') {
      ans.push(val);
    } else {
      ans = [...ans, ...flat(val)];
    }
  }
  return ans;
}

console.log(flat([1, [2, 3]]));

function sum(a) {
  return function (b) {
    if (!b) return a;
    return sum(a + b);
  };
}
console.log(sum(2)(3)(4)(5)());

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// let s = "John Doe, Peter Benjamin Parker, Mary Jane Watson-Parker, John Elvis Doe, John Evan Doe, Jane Doe, Peter Brian Parker";
// let c = "Example";
// let ans=""
// let arr=s.split(',');
// let obj={};
// console.log(arr);
// for(let val of arr)
// {
//     val=val.toLowerCase().trim();
//    let name=val.split(' ');
//    let fname=name[0].replace('-','');
//    let lname=name[name.length-1].replace('-','');
//    let email=fname+"."+lname+"@"+"exapmle.com";
//    if(obj[email]){
//         obj[email]=obj[email]+1;
//         email=fname+"."+lname+obj[email]+"@"+"exapmle.com";
//    }else{
//        obj[email]=1;
//    }
//    ans+=val+"<"+email+">, ";
// }
// console.log(ans);
