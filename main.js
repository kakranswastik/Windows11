let startMenu = document.getElementById("startMenu")
let taskbar = document.getElementById("taskbar")
let isHidden = true
startMenu.hidden = true


// when taskbar is clicked, startmenu pops up

taskbar.addEventListener("click", ()=>{
    if (isHidden == false) {
        startMenu.hidden = true;
        isHidden = true;
    }
    else if (isHidden == true) {
        startMenu.hidden = false;
        isHidden = false;
    }
})