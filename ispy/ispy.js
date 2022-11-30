var Pig = document.getElementById("pig");
var Sun = document.getElementById("sun");
var Tree = document.getElementById("tree");

function foundPig(){
  document.getElementById("item1").style.textDecoration="line-through";
}

Pig.addEventListener("click", function(){
  foundPig("Pig");
}, false);

function foundSun(){
  document.getElementById("item2").style.textDecoration="line-through";
}

Sun.addEventListener("click", function(){
  foundSun("Sun");
}, false);

function foundTree(){
  document.getElementById("item3").style.textDecoration="line-through";
}

Tree.addEventListener("click", function(){
  foundTree("Tree");
}, false);
