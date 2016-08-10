import React, { Component } from 'react';

export default class Board extends Component {

	generateBoard(){
		var fields = this.props.fields;
		return fields.map(function(item, i){
			return <div
								className="flex-item"
								key={ item.id }
								style={{background: item.color}}
						 >{item.value}</div>
		})
	}

  render() {
    return (
			<div className="flex-container">
				{this.generateBoard()}
			</div>
    );
  }
}
