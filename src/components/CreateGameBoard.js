import React, { Component } from 'react';
import Board from './Board.js';
import '../styles/createGameBoard.css';

export default class CreateGameBoard extends Component {
	constructor(props) {
    super(props)

    this.state = {
			fields: []
    }

		this.createField = this.createField.bind(this)
  }

	componentWillMount(){
		this.createField();
	}

	createField(){
		var _this = this;
		var sourceArr = []
		var rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		var cols = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

		var ships = [
			{size: 4, position: 0, color: 'red'},
			{size: 3, position: 0, color: 'yellow'},
			{size: 3, position: 0, color: 'yellow'},
			{size: 2, position: 0, color: 'blue'},
			{size: 2, position: 0, color: 'blue'},
			{size: 2, position: 0, color: 'blue'},
			{size: 1, position: 0, color: 'green'},
			{size: 1, position: 0, color: 'green'},
			{size: 1, position: 0, color: 'green'},
			{size: 1, position: 0, color: 'green'}
		]

		var shipsPositionAvailable = createPositionForSips(cols, rows);
		var shipsPositionNotAvailable = [];
		var shipsPosition = [];

		setShipsOrientation(ships)
		setShipPosition();
		draw();

		console.log(shipsPositionNotAvailable)

		function setShipPosition(){
			for (var i = 0; i < ships.length; i ++){
				set()
				function set(){
					var curentShip = ships[i];
					var size = ships[i].size;
					var position = ships[i].position;
					var rundomNumber =  Math.round(Math.random() * ((shipsPositionAvailable.length-1) - 0) + 0);
					var startShipPosition = shipsPositionAvailable[rundomNumber]
					var startShipPositionSplited = startShipPosition.split('_')

					if (check(position)) {
						setFields(cols)
					} else {
						set()
					}

					function check(position){
						if (position === 0) {
							var letterIndex;
							for (var i = 0; i < curentShip.size; i ++){
								letterIndex = cols.indexOf(startShipPositionSplited[0])
								if (shipsPositionNotAvailable.indexOf(`${cols[letterIndex + i]}_${startShipPositionSplited[1]}`) !== -1) {
									return false
								}
							}

							return (+cols.indexOf(startShipPositionSplited[0]) + size) <= 10;

						} else if (position === 1) {
							for (var i = 0; i < curentShip.size; i ++){
								if (shipsPositionNotAvailable.indexOf(`${startShipPositionSplited[0]}_${+startShipPositionSplited[1] + i}`) !== -1) {
									return false
								}
							}

							return (+startShipPositionSplited[1] + size) <= 10;
						}
					}

					function setFields(cols){
						var letterIndex = cols.indexOf(startShipPositionSplited[0]);
						if (position === 0) {
							var ship = {};
							var arrOfCoordinates = [];
							ship.color = curentShip.color
							for (var i = 0; i < curentShip.size; i ++){
								arrOfCoordinates.push(`${cols[letterIndex + i]}_${startShipPositionSplited[1]}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + i]}_${startShipPositionSplited[1]}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + i]}_${+startShipPositionSplited[1] + 1}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex + i]}_${+startShipPositionSplited[1] - 1}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + i + 1]}_${startShipPositionSplited[1]}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex + i - 1]}_${startShipPositionSplited[1]}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + i + 1]}_${+startShipPositionSplited[1] + 1}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex + i - 1]}_${+startShipPositionSplited[1] - 1}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + i - 1]}_${+startShipPositionSplited[1] + 1}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex + i + 1]}_${+startShipPositionSplited[1] - 1}`)

							}
							ship.coordinates = arrOfCoordinates;
							shipsPosition.push(ship)

						} else if (position === 1) {
							var ship = {};
							var arrOfCoordinates = [];
							ship.color = curentShip.color;
							for (var i = 0; i < curentShip.size; i ++){
								arrOfCoordinates.push(`${startShipPositionSplited[0]}_${+startShipPositionSplited[1] + i}`)

								shipsPositionNotAvailable.push(`${startShipPositionSplited[0]}_${+startShipPositionSplited[1] + i}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + 1]}_${+startShipPositionSplited[1] + i}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex - 1]}_${+startShipPositionSplited[1] + i}`)

								shipsPositionNotAvailable.push(`${startShipPositionSplited[0]}_${+startShipPositionSplited[1] + i + 1}`)
								shipsPositionNotAvailable.push(`${startShipPositionSplited[0]}_${+startShipPositionSplited[1] - i - 1}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + 1]}_${+startShipPositionSplited[1] + i + 1}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex - 1]}_${+startShipPositionSplited[1] - i - 1}`)

								shipsPositionNotAvailable.push(`${cols[letterIndex + 1]}_${+startShipPositionSplited[1] - i - 1}`)
								shipsPositionNotAvailable.push(`${cols[letterIndex - 1]}_${+startShipPositionSplited[1] + i + 1}`)

							}
							ship.coordinates = arrOfCoordinates;
							shipsPosition.push(ship)

						}
					}
				}
			}
		}

		function createPositionForSips(arr1, arr2){
			var arr = []
			for (var i = 1; i < arr1.length; i ++){
				for (var j = 1; j < arr2.length; j ++){
					var cell = `${arr1[j]}_${arr2[i]}`
					arr.push(cell)
				}
			}
			return arr
		}

		function setShipsOrientation(arr){
			for (var k = 0; k < arr.length; k ++){
				if (arr[k].size > 1){
					arr[k].position = Math.round(Math.random());
				}
			}
		}

		function draw(){
			for (var i = 0; i < rows.length; i ++){
				for (var j = 0; j < cols.length; j ++){
					var obj = {};
					obj.id = `${cols[j]}_${rows[i]}`

					for (var q = 0; q < shipsPosition.length; q ++){
						var curentShip = shipsPosition[q]
						for(var w = 0; w < curentShip.coordinates.length; w ++){
							if (obj.id === curentShip.coordinates[w]){
								obj.ship = true;
								obj.color = curentShip.color;
							}
						}
					}

					obj.shipShot = false
					obj.dissabled = false
					obj.killed = false
					if(i === 0 && cols[j] !== '#'){
						obj.value = cols[j]
					}
					if(cols[j] === '#' && i !== 0){
						obj.value = rows[i]
					}
					sourceArr.push(obj)
				}
			}
			_this.setState({
				fields: sourceArr
			})
		}

	}

  render() {
		console.log(this.state.fields)
    return (
			<div className="create-game-board">
				<h1 className="game-name">Game {this.props.params.id}</h1>
				<div className="board-container">
					<Board fields={this.state.fields}/>
				</div>
				<div className="board-container">
					<Board fields={this.state.fields}/>
				</div>
			</div>
    );
  }
}
