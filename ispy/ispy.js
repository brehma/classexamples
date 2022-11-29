var Pig = document.getElementById("pig");
var Sun = document.getElementById("sun");
var Tree = document.getElementById("tree");

function foundPig(){
    Pig.addEventListener("click", function(){
        foundPig("pig");
        Pig.style.textDecoration="line-through";
    }, false);
}

function foundSun(){
    Sun.addEventListener("click", function(){
        foundSun("sun");
        Sun.style.textDecoration="line-through";
    }, false);
}

function foundTree(){
    Tree.addEventListener("click", function(){
        foundTree("tree");
        Tree.style.textDecoration="line-through";
    }, false);
}

function replay(){
    var map = document.getElementById("randommap");
    map.reload();
}
