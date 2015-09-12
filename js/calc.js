'use-strict';
$(function(){

  var calculator = new Calculator();

});

// your code here!
function Calculator() {

  var self = this;
  $("#equals").click(function() {
    debugger;
    num1 = $('#number1').val();
    num2 = $('#number2').val();
    op = $('#operation').val();
    //var self = this;
    if (self.validateNumbers() && self.validateOperation()) {
      self.calculate();
    }
  });
}

Calculator.prototype.validateNumbers = function() {
  if (isNaN(num1) || isNaN(num2)) {
    $('#result').text("Sorry, one of those is not a valid number!");
    return false;
  } else {
    return true;
  }
};

Calculator.prototype.validateOperation = function () {
  if (op === '*' || op === '+' || op === '-' || op === '/') {
    return true;
  } else {
    $('#result').text("Sorry, not a valid operation!");
    return false;
  }
};


Calculator.prototype.calculate = function() {
  if (op === '*') {
    $('#result').text(parseInt(num1) * parseInt(num2));
  } else if (op === '+') {
    $('#result').text(parseInt(num1) + parseInt(num2));
  } else if (op === '-'){
    $('#result').text(parseInt(num1) - parseInt(num2));
  } else {
    $('#result').text(parseInt(num1) / parseInt(num2));
  }
};
