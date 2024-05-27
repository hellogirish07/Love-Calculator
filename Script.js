window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculatelove);
}

function calculatelove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if(yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random()*101);
        document.getElementById("result-msg").innerText = yourName + " and " + crushName + "'s chanch of love : ";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%"; 
    }

    else {
        document.getElementById("result-msg").innerText = "Please fill required Fields"; 
        document.getElementById("result-percentage").innerText = "No Result :("; 
        document.getElementById("result-percentage").style.fontSize = "50px";
    }
}

document.addEventListener("contextmenu", function(event){
    alert("Inspact Mode not Allowes");
    event.preventDefault();
})