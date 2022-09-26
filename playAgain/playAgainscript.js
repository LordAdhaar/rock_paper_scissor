const revertButton = document.querySelector("button");

function revertToMain(){
    window.location.replace("../index.html");
}
revertButton.addEventListener("click", revertToMain);