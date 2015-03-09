var canvas;
var context;


//These are the words that can be displayed
var presets = ["Students", "Curiosity","Technology","Learn","Create","Devices","Languages","Programming","Collaboration","Events","Microsoft","C#","Visual Studio","JavaScript","Universal","Windows","Cloud","IoT","Apps",".NET","Azure","ASP .NET","XAML","HTML5","Hour of Code","Web","Powershell","Windows Server","Videogames","Xbox One","Developers","Robotics","Kinect","Spain","MVVM","Windows Phone","Xamarin","SQL","Active Directory","Office","Cloud first","Mobile first"];
//These are the word that are currently being displayed
var texts = [];

//Set up everything
function initcanvas(){
     canvas = document.getElementById("canvas");
     context = canvas.getContext("2d");
     resize();
}

//To adapt to the screen
function resize() {
    context.width = canvas.width = window.innerWidth;
    context.height = canvas.height = window.innerHeight;
}

//The main loop that renders the words
function canvasloop() {
    context.clearRect(0, 0, canvas.width, canvas.height);


    //For each word,draw
    context.textAlign = 'center';
    for (var i = 0; i < texts.length; i++) {
        context.font = Math.round(texts[i].size) + 'px Segoe UI';
        texts[i].size *= 0.993;
        context.fillStyle = texts[i].color;
        context.globalAlpha = texts[i].alpha;
        context.fillText(texts[i].text, Math.round(texts[i].x), Math.round(texts[i].y));
        texts[i].x += texts[i].vx;
        texts[i].y += texts[i].vy;
        texts[i].alpha *= 0.993;
        if (texts[i].alpha < 0.02) {
            texts.splice(i, 1);
            i--;
        }
    }

    //Sometimes we push a new word
    //0.92 works fine, but can be changed if you want more/less words
    if (Math.random() > 0.92) {
        texts.push({
            text: presets[Math.floor(Math.random() * presets.length)],
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            vx: (Math.random() - 0.5),
            vy: (Math.random() - 0.5),
            size: Math.random() * 50 + 50,
            alpha: 1,
            color: "#FFF"
        });
    }

}
