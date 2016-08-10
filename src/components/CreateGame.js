import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import '../styles/enterForm.css';

import EnterForm from './EnterForm.js';

export default class CreateGame extends Component {

	componentDidMount(){
		window.SOC.on('gameCreated', this.directToCreateGameBoard)
	}

	sendDataToServer(data){
		window.SOC.emit('createGame', data)
	}

	directToCreateGameBoard(data){
		browserHistory.push(`/createGameBoard/${data.gameId}`)
	}

  render() {
    return (
		<div>
			<Link to='/' className="back">Main menu</Link>
			<EnterForm buttonText={'Create'} sendData={this.sendDataToServer}/>
		</div>
    );
  }
}
