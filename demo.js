// function clickHandler(args,par){
//     var val=document.getElementById('text').value;
//     console.log(val,args);
// }

// **************** debounce *********************
// function debounce(fn,t){
//     let timer;
//     return function(){
//         let args=arguments;
//         clearTimeout(timer);
//        timer=setTimeout(()=>{
//         fn.apply(this,[...args]);
//        },t)
//     }
// }
// const betterFunctin=debounce(clickHandler,3000);

// **************** thorttling *********************

// function thorttling(fn,timer){
//     let flag=true;

//    return function(){
//     if(flag){
//     fn.apply(this,arguments);
//     flag=false;
//     setTimeout(()=>{
//         flag=true;
//     },timer)

//     }

//    }
// }


//  const betterFunctin=thorttling(clickHandler,300);
// *************polyfill of bind methods ***************
// const obj={
//     name:"Makku",
//     age:'25 years old',
// }

// function myFunc(love,ar){
//     console.log(this.name, 'is',this.age,'she my first true', love,ar);
// }

// Function.prototype.myBind=function(...args){
//     let fun=this;
//     let arg=args.slice(1);
//     return function(...ar){
//         console.log(arguments)
//    fun.apply(args[0],[...arg,...ar]);
//     }
// }
// myFunc.bind(obj,'love')();
// myFunc.myBind(obj,'love')('chutiya hai');

// let arr=[2,4,1,0];

// Array.prototype.myReduce=function(fn,initialValue){
//     let arr=this,ans=initialValue;

//     for(let i=0;i<arr.length;i++){
//          ans=fn(ans,arr[i]);
//     }

//     return ans;

// }

// console.log(arr.myReduce((acc,val)=>acc+val,0));

// const fn1=function(fun){
//    console.log('timer started 1');
//    setTimeout(()=>{
//     console.log("timer end 1");
//     fun(fn3)
//    },1000)
// }

// const fn2=function(fun){
//    console.log('timer started 2');
//    setTimeout(()=>{
//     console.log("timer end 2");
//     fun()
//    },2000)
// }

// const fn3=function(){
//    console.log('timer started 3');
//    setTimeout(()=>{
//     console.log("timer end 3");
//    },3000)
// }

// fn1(fn2);

// const fn1 = function () {
//   console.log('timer started 1');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('timer end 1');
//       resolve('Timer get end');
//     }, 1000);
//   });
// };

// const fn2 = function () {
//   console.log('timer started 2');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('timer end 2');
//       //   let error = new Error('Promise get rejected');

//       //   reject(error);
//       resolve('good job 2');
//     }, 2000);
//   });
// };

// const fn3 = function () {
//   console.log('timer started 3');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('timer end 3');
//       resolve('completed');
//     }, 3000);
//   });
// };

// // fn1()
// //   .then((res) => {
// //     console.log(res);
// //     fn2().then((res) => {
// //       console.log(res);
// //     });
// //   })
// //   .catch((err) => console.log(err))
// //   .finally(() => {
// //     fn3().then((res) => {
// //       console.log(res);
// //     });
// //   });

// Promise.all([fn1(), fn2(), fn3()]).then((res) => {
//   console.log('response......??', res);
// });
