function calculateBMI() {
    var weight = parseFloat(prompt("Enter your weight:"));
    var height = parseFloat(prompt("Enter your height(cms):")) / 100; 
 
    var BMI = weight / (height * height);
  
    console.log("BMI:", BMI);
  }
  
  calculateBMI();