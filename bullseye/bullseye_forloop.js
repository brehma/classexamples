var table;
do {
	table = prompt('Pick a number to be multiplied between 0 and 10');
} while(table < 0 || table > 10);	// Unit of table
var msg = '<h2>Multiplication Table</h2>';              // Message


for(var i = 1; i < 11; i++) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
 }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;