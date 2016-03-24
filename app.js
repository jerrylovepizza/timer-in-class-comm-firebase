// v1 - timer that rings after 5 minutes

//Variables: 

var startTime = 300; //start time in seconds 

//Functions:
// 

function start(){
	counter = setInterval(countDown, 1000);
	var currentTime = (timeConverter(startTime));
	$('#timeBox').html(currentTime);
}
function stop(){
	clearInterval(counter);
}
function reset(){
	startTime = 300;
	clearInterval(counter);
	$('#timeBox').html(timeConverter(startTime));
}
function audio(){
	var audio = new Audio('gmadness.mp3');
    audio.play();
}
function countDown(){
	startTime = startTime - 1;
		if (startTime == 0) {
		audio();
		clearInterval(counter);
		}
	$('#timeBox').html(timeConverter(startTime));
}
function timeConverter(t){

    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  
}

//Main Processes:		
window.onload = function(){
  $('#start').on('click', start);
  $('#stop').on('click', stop);
  $('#reset').on('click', reset);
};

