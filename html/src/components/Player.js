import React from 'react';

export class Player extends React.Component {
	render() {
		return (<p>{ this.props.name }</p>);
	}
}