// (function greet(){
//      console.log("Hello World!");
// }());

// function evenOdd(num){
//     return num&1 ? "Odd" : "Even";
// }

// console.log(evenOdd(5));
// console.log(evenOdd(6));

// let per = 90;
// if (per >= 80) {
//   console.log("A+");
// } else if (per >= 70) {
//   console.log("A");
// } else if (per >= 60) {
//   console.log("B");
// } else if (per >= 50) {
//   console.log("C");
// } else if (per >= 40) {
//   console.log("D");
// } else {
//   console.log("Fail");
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//   console.log(element);
// });

// function factorial(num) {
//   let fact = 1;
//   while (num > 0) {
//     fact *= num;
//     num--;
//   }
//   return fact;
// }
// console.log(factorial(5));


function generateOTP() {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}
let otp = generateOTP();
console.log("Generated OTP: ", otp);

function validateOTP(){
    let userOTP = document.getElementById("otp1").value;
    userOTP += document.getElementById("otp2").value;
    userOTP += document.getElementById("otp3").value;
    userOTP += document.getElementById("otp4").value;

    console.log("User OTP: ", userOTP);
    if(otp === userOTP){
        console.log("OTP is correct");
        document.getElementById("message").innerHTML = "OTP is correct";
    }else{
        console.log("OTP is incorrect");
    }
}
