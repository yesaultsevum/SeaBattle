var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(3001, function(){
	console.log('Example app listening on port 3001!');
});

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
});

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

var games = {};
var createGame = function(data, obj, res){
	var obj = {[data.gameId]: data.userName}
	games = Object.assign(games, obj);
	res(data);
}
var joinGame = function(data, obj, res){
	if (data.gameId in games) {
		res(data)
	} else {
		res('Игра с таким номером не создана')
	}
}

io.on('connection', function(socket){
  console.log('a user connected');

	socket.on('createGame', function(data){
		createGame(data, games, function(response){
			socket.emit('gameCreated', response)
		})
	});

	socket.on('joinGame', function(data){
		joinGame(data, games, function(response){
			socket.emit('joinedToGame', response)
		})
	});

});
