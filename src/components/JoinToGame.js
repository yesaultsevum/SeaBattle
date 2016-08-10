import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import '../styles/enterForm.css';

import EnterForm from './EnterForm.js';

export default class JoinToGame extends Component {

	componentDidMount(){
		window.SOC.on('joinedToGame', this.directToCreateGameBoard)
	}

	sendDataToServer(data){
		window.SOC.emit('joinGame', data)
	}

	directToCreateGameBoard(data){
		if (typeof data === "string") {
			alert(data)
		} else {
			browserHistory.push(`/createGameBoard/${data.gameId}`)
		}
	}

  render() {
    return (
			<div>
				<Link to='/' className="back">Main menu</Link>
				<EnterForm buttonText={'Join'} sendData={this.sendDataToServer} />
  	  </div>
    );
  }
}
