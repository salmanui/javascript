function genaratedOtp(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}
console.log(genaratedOtp(4));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    reject("Error");
  }, 1000);
});

promise.then((value) => {
  console.log(value); // "Success!"
});
