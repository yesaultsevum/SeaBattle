import React, { Component } from 'react';
import { Link } from 'react-router';

export default class EnterForm extends Component {
	constructor(props) {
    super(props)

    this.state = {
    }

		this.sendData = this.sendData.bind(this)
  }

	sendData(){
		//console.dir(this.refs.inputGameId)
		let data = {}
		data.gameId = this.refs.inputGameId.value
		data.userName = this.refs.inputUserName.value
		this.props.sendData(data)
	}

  render() {
    return (
			<div className="enter-form">
			  <label>Enter name of the game</label><br/>
			  <input ref="inputGameId" type="text" />
			  <label>Enter your name</label><br/>
			  <input ref="inputUserName" type="text" />
			  <div
					to='createGameBoard'
					className="enter-form--enter"
					onClick={this.sendData}>
					{this.props.buttonText}
				</div>
			</div>
    );
  }
}
