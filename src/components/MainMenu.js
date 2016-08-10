import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/mainMenu.css';

export default class MainMenu extends Component {
	componentDidMount(){

	}
  render() {
    return (
		<div className="main-menu">
			 <ul className="main-menu--list">
				 <li><Link to='/createGame'>Create game</Link></li>
				 <li><Link to='/joinToGame'>Join to game</Link></li>
				 <li>Exit</li>
			 </ul>
		</div>
    );
  }
}
