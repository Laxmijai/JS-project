

  const form = document.getElementById('bmiForm');
 // submit hone pr height aur weight ki value nikalenge
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('results');

    if (isNaN(height) || height <= 0) {
      result.innerHTML = `Please enter a valid height ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
      result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      let message = `Your BMI is: <span>${bmi}</span><br>`;
      if(bmi < 18) message += "you are underweight";
      else if(bmi >18 && bmi <25) message += "you are fit";
      else message += "you are overweight";
       result.innerHTML = message
    }
     
  });
