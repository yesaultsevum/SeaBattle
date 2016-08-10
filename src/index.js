import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory} from 'react-router';


import App from './components/App';
import MainMenu from './components/MainMenu';
import Game from './components/Game.js';
import CreateGame from './components/CreateGame.js';
import JoinToGame from './components/JoinToGame.js';
import CreateGameBoard from './components/CreateGameBoard.js';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to='mainMenu' />
			<Route path="mainMenu" component={MainMenu} />
			<Route path="createGame" component={CreateGame} />
			<Route path="joinToGame" component={JoinToGame} />
			<Route path="createGameBoard/:id" component={CreateGameBoard} />
			<Route path="game" component={Game} />
		</Route>
	</Router>,
	document.getElementById('root')
);
