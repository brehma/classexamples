var Pig = document.getElementById("pig";
Pig.addEventListener("click", function(){
    foundItem("pig");
  Pig.style.textDecoration="line-through";
}, false);
var Sun = document.getElementById("sun";
Sun.addEventListener("click", function(){
    foundItem("sun");
  Sun.style.textDecoration="line-through";
}, false);
var Tree = document.getElementById("tree";
Tree.addEventListener("click", function(){
    foundItem("tree");
  Tree.style.textDecoration="line-through";
}, false);

function replay(){
 var map= document.getElementById("randommap");
 map.reload();
}
