import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/app.css';

import io from 'socket.io-client';
window.SOC = io.connect('http://localhost:3001');


export default class App extends Component {
	componentDidMount(){
	}
  render() {
    return (
		<div className='app-wrapper'>
			 {this.props.children}
		</div>
    );
  }
}
