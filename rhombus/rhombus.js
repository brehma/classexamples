var height;
var colorEven;
var colorOdd;
var symbol;

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    height = pHeight;
    colorEven = pColorEven;
    colorOdd = pColorOdd;
    symbol = pSymbol;

    upLeft();
    upRight();
    downLeft();
    downRight();
}

function upLeft(){
    var rLine ="";
    for (i = 0; i < height; i++) {
        rLine +="<p>";
        //Create each line on the Rhombus
        for (k = 0; k < height - i; k++) {
            rLine += "<span style = 'color: #FFFFFF;'>" + symbol + "</span>";
        }
        for (j = 0; j <= i; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
            //even
            rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + colorOdd + ";'>" + symbol +"</span>";
        }
        rLine +="</p>";
    }

    document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(){
    var rLine ="";
    for (i = 0; i < height; i++) {
        rLine +="<p>";
        //Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
            //even
            rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
        }
        rLine +="</p>";
        // console.log(rLine);
    }

    document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(){
    var rLine ="";
    for (i = height; i > 0; i--){
        rLine +="<p>";
        //Create each line on the Rhombus
        for (k = 0; k <= height - i; k++) {
            rLine += "<span style = 'color: #FFFFFF;'>" + symbol + "</span>";
        }
        for (j = 0; j < i; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
            //even
            rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
        }
        rLine +="</p>";
        // console.log(rLine);
    }

    document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(){
    var rLine ="";
    for (i = height; i > 0; i--){
        rLine +="<p>";
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
            //even
            rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
        }
        rLine +="</p>";
        // console.log(rLine);
    }

    document.getElementById("downRight").innerHTML = rLine;
}
