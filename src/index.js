import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

/**
* Try to click me with ReactJS
* Marcus Pitz, 2017-11
**/

class Runner extends React.Component {
	render() {
		return (
			<button className="Runner">
				{this.props.name}
				{this.props.posGen}
			</button>
		);
  }
}


class Space extends React.Component {

	generatePos(min, max) {		
		let range = Math.floor(Math.random() * (max - min + 1)) + min;
		alert('oi:' + range);
		return range;
	}

	render() {

		return (
			<div className="Space">
				<Runner 
					posGen = {() => {this.generatePos(1,4)}}
					name   = {"Me !"}
				/>
			</div>
		);
	}
}

/**
* react call
**/
ReactDOM.render(<Space />, document.getElementById("root"));

