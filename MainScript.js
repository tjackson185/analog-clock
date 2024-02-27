// Main Javascript 
//Anolog Clock
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
const currentDate = new Date();
const secondsRatio = currentDate.getSeconds() / 60;
const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
setRotation(secondHand, secondsRatio);
setRotation(minuteHand, minutesRatio);
setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()


function btn_click(){
var element = document.getElementById(this).style.animation

    //let ele = document.querySelector('#btn_menu');
//ele.classList.toggle('btn_show');
/*for(let cssClass of ele.classList){
        console.log(cssClass);
    }*/

   //var element = document.getElementsByName("btn").classList;
    
    //var classOne = element.classList.item(0);
    //var classtwo = element.classList.item(1);
    //element.classList.remove(classOne, classtwo);
   // element.classList.add("btn_", "btn_show");

    // var b = document.styleSheets[0].cssRules[25].style;
    // console.log(b);
    // b.setProperty("background","url('/images/sprite_btn_1.png')", "-1 -72");
    //var btn = document.getElementsByName("btn");
    //btn.style.background = "url('/images/sprite_btn_1.png')";
    //btn.style.backgroundPosition = "-1px -72px"
}

function btn_up(){
    //let ele = document.querySelector('#btn_menu');
    //ele.classList.remove('btn_show');

//var element = document.getElementsByName("btn")
//var classTwo = element.classList.item(1);
//element.classList.remove(classTwo);
//element.classList.add("face_right");

//document.getElementsByName("btn").style.background = "url(/images/sprite_btn_1.png) -1px -1px"; 
}