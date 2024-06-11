function checkRadioButton() {
    var radios = document.getElementsByName('myRadio');
    var isSelected = false;
    var isCorrect = false;
  
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isSelected = true;
            if (radios[i].value === 'correct') {
                isCorrect = true;
            }
            break;
        }
    }
  
    var resultElement = document.getElementById('result');
    if (isSelected) {
        if (isCorrect) {
            resultElement.textContent = "Correct selection!";
        } else {
            resultElement.textContent = "Incorrect selection.";
        }
    } else {
        resultElement.textContent = "No radio button selected.";
    }
  }