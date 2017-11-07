import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

/**
* Try to click me with ReactJS
* Marcus Pitz, 2017-11
**/

class Runner extends React.Component {
	
	constructor() {
		super();
		this.state = {
			ops: true
		};
  }
	
	onClickButton = (pos) => {
		this.setState({ops: !this.state.ops});	
	}
	
	render() {
		return (
			<button className={'Runner posX'+this.props.gen() + ' posY'+this.props.gen()} onClick={() => this.onClickButton(this.props.gen())}>
				{this.props.name}{ + this.state.ops ? ' :D' : ' :P'}
			</button>
		);
  }
}


class Space extends React.Component {

	generatePos(min, max) {		
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	render() {

		return (
			<div className="Space">
				<Runner 
					posX = {this.generatePos(1,4)}
					posY = {this.generatePos(1,4)}
					name   = {"Me !"}
					gen = { () => this.generatePos(1,4) }
				/>
			</div>
		);
	}
}

/**
* react call
**/
ReactDOM.render(<Space />, document.getElementById("root"));

