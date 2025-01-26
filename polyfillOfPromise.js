// https://medium.com/@manojsingh047/polyfill-for-javascript-promise-81053b284e37

// const promise = new myPromise((resolve, reject) => {
//   setTimeout(() => resolve("Hello there"), 2000);
// });

// promise.then((res) => console.log(res));

function myPromise(executer) {
  let thenHandler,
    catchHandler,
    isCalled = false,
    isResolved = false,
    isRejected = false,
    resolveValue,
    errorValue;

  function resolve(val) {
    isResolved = true;
    resolveValue = val;
    if (typeof thenHandler === 'function' && !isCalled) {
      thenHandler(val);
    }
  }
  function reject(err) {
    isRejected = true;
    errorValue = err;
    if (typeof catchHandler == 'function' && !isCalled) {
      catchHandler(err);
    }
  }
  this.then = function (fn) {
    thenHandler = fn;

    if (isResolved && !isCalled) {
      thenHandler(resolveValue);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (fn) {
    catchHandler = fn;
    if (isRejected && !isCalled) {
      catchHandler(errorValue);
    }
    isCalled = true;

    return this;
  };

  executer(resolve, reject);
}

const promise1 = new myPromise((resolve, reject) => {
  console.log('Hello there...???');

  resolve(23);
});
const promise2 = new myPromise((resolve, reject) => {
  console.log('Hello there...22');
  resolve(24);
});

// console.log(promise1.then((res) => console.log(res)));

myPromise.resolve = function (val) {
  return new myPromise((resolve, reject) => {
    resolve(val);
  });
};
myPromise.reject = function (reason) {
  return new myPromise((resolve, reject) => {
    reject(reason);
  });
};

myPromise.all = function (promises) {
  return new myPromise((resolve, reject) => {
    let resolvePromises = [],
      count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          resolvePromises[i] = res;
          count++;
          if (count == promises.length) {
            resolve(resolvePromises);
          }
        })
        .then((res) => reject(res));
    }
  });
};

myPromise.all([promise1, promise2]).then((res) => console.log(res));

// const promise=new Promise((resolve,reject)=>{
//     resolve("Hello there");
// });

// promise.then((res)=> console.log(res));

// function myPromise(executor) {
//   let state = 'pending';
//   let value = null;
//   let handler = [];
//   let thenHandler = [];
//   function resolve(result) {
//     if (state == 'fulfilled') return;
//     state = 'fulfilled';
//     value = result;
//     handler.forEach((cb) => cb(value));
//   }

//   function reject(result) {
//     if (state == 'reject') return;
//     value = result;
//     state = 'reject';
//     thenHandler.forEach((cb) => cb(value));
//   }

//   executor(resolve, reject);
//   this.then = function (callback) {
//     if (state == 'fulfilled') callback(value);
//     else handler.push(callback);
//   };

//   this.catch = function (callback) {
//     if (state == 'reject') callback(value);
//     else thenHandler.push(callback);
//   };
// }
// const promise=new MyPromise((res,rej)=>rej("Hello there"));
//  promise.then(res=> console.log(res)).catch(res=> console.log(res));

MyPromise.all = function (arr) {
  return new MyPromise((resolve, reject) => {
    let resp = [],
      count = 0;
    for (let promise of arr) {
      promise
        .then((res) => {
          resp.push(res);
          count += 1;
          if (count == arr.length) {
            resolve(resp);
          }
        })
        .then((res) => reject(res));
    }
  });
};
MyPromise.race = function (arr) {
  return new MyPromise((resolve, reject) => {
    for (let promise of arr) {
      promise.then((res) => resolve(res)).catch((res) => reject(res));
    }
  });
};
const promise1 = new MyPromise((resolve, reject) => {
  console.log('Hello there...???');

  resolve(23);
});
const promise2 = new MyPromise((resolve, reject) => {
  console.log('Hello there...22');
  resolve(24);
});
// MyPromise.all([promise1, promise2]).then((res) => console.log(res));
MyPromise.race([promise1, promise2]).then((res) => console.log(res));
function MyPromise(exec) {
  let thenHandler,
    catchHandler,
    thenValue = null,
    catchValue = null,
    status = false,
    isResolved = false,
    isReject = false;
  function resolve(val) {
    isResolved = true;
    thenValue = val;
    if (thenHandler == 'function' && !status) {
      thenHandler(val);
    }
  }

  function reject(val) {
    catchValue = val;
    isReject = true;
    if (catchHandler == 'function' && !status) {
      catchHandler(val);
    }
  }
  this.then = function (fn) {
    thenHandler = fn;
    if (isResolved && !status) {
      fn(thenValue);
      status = true;
    }
    return this;
  };
  this.catch = function (fn) {
    catchHandler = fn;
    if (isReject && !status) {
      console.log(catchValue);
      fn(catchValue);
      status = true;
    }
    return this;
  };
  exec(resolve, reject);
}
