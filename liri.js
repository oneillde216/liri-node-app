var request = require('request');
//request('http://www.google.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});

require("dotenv").config();

var fs = require('fs');

var keys = require('keys.js');

var Twitter = require('twitter');

//var spotify = new Spotify(keys.spotify);
  
//var client = new Twitter(keys.twitter);
function dylantweets(){
	var client = new Twitter({
  	consumer_key: keys.twitterKeys.consumer_key,
  	consumer_secret: keys.twitterKeys.consumer_secret,
  	access_token_key: keys.twitterKeys.access_token_key,
  	access_token_secret: keys.twitterKeys.access_token_secret,
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
  	secret: SPOTIFY_SECRET, //the <input> thing is confusing here, isn't the point of the .env file to hide id/secret?
	});
 
	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}