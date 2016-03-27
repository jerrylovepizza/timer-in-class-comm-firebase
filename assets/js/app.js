// v1 - timer that rings after 5 minutes

var startTime = 300; //start time in seconds 
var startTime = 10;
var song = new Audio('assets/audio/gmadness.mp3');

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
		startTime = 10;
		clearInterval(counter);
		$('#timeBox').html(timeConverter(startTime));
		stopAudio(song);
	}
	function audio(){
	    song.play();
	}
	function stopAudio(){
		song.pause();
	}
	function countDown(){
		startTime = startTime - 1;
			if (startTime == 0) {
			audio(song);
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
	
window.onload = function(){
	$('#start').on('click', start);
	$('#stop').on('click', stop);
	$('#reset').on('click', reset);
}

// Use this to set new Audio constructor
// mySound = new Audio(['https://p.scdn.co/mp3-preview/f59a6b5f638815d9116c84d21d8bbf01ffda0892']);
// function playAudio(){
// 	mySound.play();
// }












