// creation fonction du bouton pour validation
function button(){
    // creation variable pour y inclure mon id
let mdp = document.getElementById("mdp");
let validation = document.getElementById("validation");
// si mdp est identique a validation il entoure les bordures en vert sinon en rouge
if(mdp.value == validation.value){
    mdp.style.borderColor= "green";
    validation.style.borderColor= "green";
}else{
    mdp.style.borderColor= "red";
    validation.style.borderColor= "red";
  }
}

    


