var request = require('request');
//request('http://www.google.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});

require("dotenv").config();

var keys = require('keys.js');


var fs = require('fs');


var Twitter = require('twitter');

//var spotify = new Spotify(keys.spotify);
  
//var client = new Twitter(keys.twitter);
function dylantweets(){
	//process.argv
	var client = new Twitter({
  	consumer_key: TWITTER_CONSUMER_KEY,
  	consumer_secret: TWITTER_CONSUMER_SECRET,
  	access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  	access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  	});
 
	var params = {oneilltest216: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
    	console.log(tweets);
  	}
});

function dylanspithotfire(){
	var Spotify = require('node-spotify-api');
 
	var spotify = new Spotify({
  	id: SPOTIFY_ID,
  	secret: SPOTIFY_SECRET, //struggled getting these to correlate with appropriate keys in process.env file
	});
 
	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  }
 
	console.log(data); 
});
}

function dylanlikesmovies(){
	var findmovie;
	var url = 'http://www.omdbapi.com/?t=' + findmovie +'&y=&plot=long&tomatoes=true&r=json';
   	request(url, function(error, response, body){
	    if(!error && response.statusCode == 200){
	        console.log("Title: " + JSON.parse(body)["Title"]);
	        console.log("Year: " + JSON.parse(body)["Year"]);
	        console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
	        console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
	        console.log("Country: " + JSON.parse(body)["Country"]);
	        console.log("Language: " + JSON.parse(body)["Language"]);
	        console.log("Plot: " + JSON.parse(body)["Plot"]);
	        console.log("Actors: " + JSON.parse(body)["Actors"]);
	        
};