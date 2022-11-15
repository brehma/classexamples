
var table;
var table = prompt("choose a value between 1-10") // Type of input + user prompt

var operator = 'multiplication'; // Type of calculation
var i = 1;                // Set counter to 1
var msg = '<h2> Multiplication Table </h2>';              // Message

if (operator === 'addition') {
} else {
  // Do multiplication
  while (i <= 10) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
