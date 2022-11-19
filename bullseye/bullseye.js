
var multiplier;
var multiplier = prompt("choose a value between 1-10") // Type of input + user prompt

//var operator = 'multiplication'; // Type of calculation
var i = 0;                // Set counter to 0
var msg = '<h2> Multiplication Table </h2>';              // Message

/*if (operator === 'addition') {
} else {
  // Do multiplication */
  while (i <= 11) {
    msg += i + ' x ' + multiplier + ' = ' + (i * multiplier) + '<br />';
    i++;
//  }
//}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
