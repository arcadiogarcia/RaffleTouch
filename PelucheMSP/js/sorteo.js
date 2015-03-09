//The current state of the app
//0-Idle/Waiting for input
//1-The user pressed the buttons but still doesnt know the result
//2-The result is shown on screen
var state = 0;
//Indicates the chance of winning, should be adjusted, always between [0,1]
var probabilidad = 0.5;
//Those are the messages, customize as you want
var strings = [];
strings[0] = "Calculando";
strings[1] = "¡Has ganado!";
strings[2] = "No has tenido suerte :(";
strings[3] = "¡Quiero mi peluche MSP!";

function sorteoSetUp() {
    //Set the starting string
    document.getElementById("content").innerText = strings[3];
}

//On mousedown handler
//Change the color when holding down
//(I should use CSS but this somehow made more sense in the moment)
function hold() {
    document.getElementById("content").style.backgroundColor = "rgba(155,0,185,0.7)";
}

//On mouseup handler
//Choose the action depending on the state
function clickbox() {
    switch (state) {
        //When in 'idle' state
        case 0:
            sortear();
            break;
        //When showing the result of the previous game
        case 2:
            restablecer()
            break;
    }
}

//This just sets the text and color, and timer for the dots and the function to really calculate the result
function sortear() {
    if (state == 0) {
        document.getElementById("content").style.color = "rgba(255,255,255,1)";
        state = 1;
        document.getElementById("content").innerText = strings[0];
        document.getElementById("content").style.backgroundColor = "rgba(255,255,255,0.6)";
        for (var i = 0; i < 10; i++) {
            window.setTimeout(anadirPunto, i * 1400 / 10);
        }
        window.setTimeout(mostrarResultado, 1500);
    }
}

//Quite self descriptive
function anadirPunto() {
    if (state == 1) {
        document.getElementById("content").innerText += ". ";
    }
}

//This function actually "throws the dice" and shows the result
function mostrarResultado() {
    if (state == 1) {
        state = 2;
        if (Math.random() <= probabilidad ) {
            document.getElementById("content").innerText = strings[1];
            document.getElementById("content").style.backgroundColor = "rgba(0,255,0,0.6)";
        } else {
            document.getElementById("content").innerText = strings[2];
            document.getElementById("content").style.backgroundColor = "rgba(255,0,0,0.6)";
        }
    }
}

//This function 'resets' the app for the next user
function restablecer() {
    if (state == 2) {
        state = 0;
        document.getElementById("content").innerText = strings[3];
        document.getElementById("content").style.backgroundColor = "rgba(60,200,244,0.6)";
        document.getElementById("content").style.color = "rgba(60,114,188,1)";
    }
}




