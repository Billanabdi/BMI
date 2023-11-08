// Good Luck! You got this 💪🏾
// Write your code here.

function bmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}
let moeWeight = 90;
let moeHeight = 2.05;
const moeBMI = bmi(moeWeight, moeHeight);

let aliWeight = 60;
let aliHeight = 1.8;
const aliBMI = bmi(aliHeight, aliWeight);

if (moeBMI > aliBMI) {
  console.log("Moe has a bigger BMI");
} else if (aliBMI > moeBMI) {
  console.log("Ali has a bigger BMI");
} else {
  console.log("They have the same BMI");
}
