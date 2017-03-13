var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#calc-form').submit(function(event) {
    event.preventDefault();
    var first = parseInt($('#first').val());
    var second = parseInt($('#second').val());
    var sign = $('input[name=arith]:checked', '#calc-form').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.arith(first, second, sign);
    $('#solution').empty();
    $('#solution').append("<p>" + output + "</p>");

  });

});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
