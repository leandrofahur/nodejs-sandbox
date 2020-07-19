const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(a < 0 || b < 0) {
        return reject('Numbers must be non-negative!')
      } else {
        resolve(a+b);
      }
    }, 1000);
  }); 
};

const doWork = async () => {
  const a = await add(1,99);
  const sum = await add(a, 99);
  return sum;
}

doWork().then(res => { 
  console.log('Result:', res ); 
}).catch(err => {
  console.log(err);
});