
var open = false;

function show(){
    if(!open){
        document.getElementById("show").style.display = "flex";
        open = true;
    }
    else{
        document.getElementById("show").style.display = "none";
        open = false;
    }
}