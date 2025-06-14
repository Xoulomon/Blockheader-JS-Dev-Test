function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");
  const bmiImage = document.getElementById("bmi-image");

  resultDiv.textContent = "";
  errorDiv.textContent = "";
  bmiImage.style.display = "none";
  bmiImage.src = "";

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    errorDiv.textContent = "Please enter valid, positive numbers for height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let status = "";
  let imagePath = "";

  if (bmi < 18.5) {
    status = "Underweight";
    imagePath = "img/underweight.png";
  } else if (bmi < 25) {
    status = "Normal";
    imagePath = "img/normal.png";
  } else if (bmi < 30) {
    status = "Overweight";
    imagePath = "img/overweight.png";
  } else {
    status = "Obese";
    imagePath = "img/obese.png";
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} — ${status}`;
  bmiImage.src = imagePath;
  bmiImage.alt = status;
  bmiImage.style.display = "block";
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("error").textContent = "";
  document.getElementById("bmi-image").src = "";
  document.getElementById("bmi-image").style.display = "none";
}