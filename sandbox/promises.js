// Promises:
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a+b);
    }, 1000);
  }); 
};

// // Nested promises:
// add(1,1).then((res,rej) => {
//   console.log(res);
//   add(res, 1).then((res, rej) => {
//     console.log(res);
//   }).catch(rej => {
//     console.log(rej);
//   });
// }).catch(rej => {
//   console.log(rej);
// });

// Chained promises:
add(1,1).then((res, rej) => {
  console.log(res);
  return add(res, 1);
}).then((res, rej) => {
  console.log(res);
}).catch(rej => {
  console.log(rej);
});



