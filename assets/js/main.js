let button = document.getElementById("button");
button.onclick = function(v) {
    v.preventDefault();
    // 
    let mdp = document.getElementById("mdp").value;
    let confirmation = document.getElementById("validation").value;
    if (mdp == confirmation) {
        document.getElementById("mdp").style.borderColor = "green";
      document.getElementById("validation").style.borderColor = "green";
    } else {
        document.getElementById("mdp").style.borderColor = "red";
        document.getElementById("validation").style.borderColor = "red";

    }





}