var baseURL = 'https://api.spotify.com/v1/search?q=';

function makeRequest(songValue){
	var queryURL = baseURL + songValue + '&type=track';

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		alert('done!');
		//response.items[itterate]
		for (var i = 0; i < response.tracks.items.length; i++) {
			console.log(response.tracks.items[i]);
			console.log(response.tracks.items[i].artists[0].name);
			console.log(response.tracks.items[i].name)
			console.log(response.tracks.items[i].preview_url);
		}
		console.log(queryURL);
		console.log(response);
	});
	}

$('#search').on('click', function(){
	var songValue = $('#query').val().replace(' ', '').trim();

	makeRequest(songValue);

	return false;
});

// mySound = new Audio(['https://p.scdn.co/mp3-preview/f59a6b5f638815d9116c84d21d8bbf01ffda0892']);

// function playAudio(){
// 	mySound.play();
// }






