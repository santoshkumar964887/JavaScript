// var inputBox = document.getElementById("text");

// function myFunc(val) {
//   console.log(inputBox.value,val );
// }
// function debounce(fn, time) {
//   let timer;
//   return function () {
//     let arg=arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this,[...arg]);
//     }, time);
//   };
// }
// // var betterFunction = debounce(myFunc, 300);

// function throttling(fn, timer){
//     let val=true;
//    return function(){
//       if(val){
//         val=false;
//         fn.apply(this,[...arguments]);
//         setTimeout(()=>{val=true;},timer)
//       }

//    }
// }

// const betterFunction=throttling(myFunc,1000);

// let val=[1,3,4,5];
// let obj={
//     name:"Santosh Kumar",
//     age:26
// }

// function myFunc(a,b){
//     console.log(this.name,this.age,a,b,'...........???')
// }



// Function.prototype.myCall=function(obj,...args){
//     fn=this;

//         fn.apply(obj,[...args])
    
// }
// myFunc.myCall(obj,10,15);

let val=[1,2,3,4,5];
Array.prototype.myReduce= function(acc,initial){
   let ans,init=initial,arr=this;
   
   for(let val of arr){
    init=acc(init,val)
   }

   return init;
   
}

console.log(val.myReduce((a,b)=> a+b,6));