const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a+b);
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