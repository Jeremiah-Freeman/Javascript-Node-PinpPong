function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.arith = function(first, second, sign){
  var output = 0;
  if(sign === "add"){
    output = first + second;
  }else if (sign === "sub"){
    output = first - second;
  }else if (sign === "divide"){
    output = first / second;
  }else if (sign === "mult"){
    output = first * second;
  }else {
    output = "error";
  }
  return output;
};

exports.calculatorModule = Calculator;
