for(var i=0;i<document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        playSound(this.innerHTML);
        changeStyle(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event) {
    var send=event.key.toLowerCase();
    
    playSound(send);
    changeStyle(send);
});

function playSound(key) {

    var sound;

    switch(key) {
        case "w":
            sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a" :
            sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d" :
            sound=new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k" :
            sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l" :
            sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function changeStyle(key) {
    var button=document.querySelector("." + key);
    button.classList.add("pressed");

    setTimeout(function () {
        button.classList.remove("pressed");
    },100);
}


