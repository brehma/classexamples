var multiplier = prompt("choose a value between 1-10"); // Type of input + user prompt

// Set counter to 0
var i = 0;

// Show Multiplication Table As A Message
var msg = '<h2> Multiplication Table </h2>';

while (i <= 11) {
    msg += i + ' x ' + multiplier + ' = ' + (i * multiplier) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
