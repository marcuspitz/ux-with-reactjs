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
	
	onClick = (msg) => alert(msg);
	
	onMouseEnter = (pos) => {
		this.setState({ops: !this.state.ops});	
	}
	
	render() {
		return (
			<button className={'Runner posX'+this.props.gen() + ' posY'+this.props.gen()} 
					onMouseEnter={() => this.onMouseEnter(this.props.gen())} 
					onClick={()=>this.onClick(this.props.success)}>
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
					success = {"Oh my god you click me!"}
				/>
			</div>
		);
	}
}

/**
* react call
**/
ReactDOM.render(<Space />, document.getElementById("root"));

