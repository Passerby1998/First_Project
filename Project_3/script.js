//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");

const bmiCategory = document.querySelector("#bmiCategory");
const bmiValue = document.querySelector("#bmiValue");

weight.addEventListener("input", function (e) {
  console.log(e.target.value);
});

height.addEventListener("input", function (e) {
  console.log(e.target.value);
});

calculate.addEventListener("click", function () {
  console.log("button clicked");
  const bmi = weight.value / Math.pow(height.value, 2);
  const bmiRounded = Math.round(bmi * 10) / 10;
  bmiValue.innerText = bmiRounded;

  if (bmiRounded <= 15) {
    console.log("Very severely underweight");
    bmiCategory.innerText = "Very severely underweight";
  } else if (bmiRounded > 15 && bmiRounded <= 16) {
    console.log("Severely underweight");
    bmiCategory.innerText = "Severely underweight";
  } else if (bmiRounded > 16 && bmiRounded <= 18.5) {
    console.log("Underweight");
    bmiCategory.innerText = "Underweight";
  } else if (bmiRounded > 18.5 && bmiRounded <= 25) {
    console.log("Normal (healthy weight)");
    bmiCategory.innerText = "Normal (healthy weight)";
  } else if (bmiRounded > 25 && bmiRounded <= 30) {
    console.log("Overweight");
    bmiCategory.innerText = "Overweight";
  } else if (bmiRounded > 30 && bmiRounded <= 35) {
    console.log("Obese Class 1 (Moderately obese)");
    bmiCategory.innerText = "Obese Class 1 (Moderately obese)";
  } else if (bmiRounded > 35 && bmiRounded <= 40) {
    console.log("Obese Class 2 (Severely obese)");
    bmiCategory.innerText = "Obese Class 2 (Severely obese)";
  } else if (bmiRounded > 40) {
    console.log("Obese Class 3 (Very severely obese)");
    bmiCategory.innerText = "Obese Class 3 (Very severely obese)";
  } else {
    console.log("NaN");
  }
});

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40
