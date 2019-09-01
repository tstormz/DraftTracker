import React from 'react';

import { Player } from './Player';
import Axios from 'axios';

const ax = require('axios');

export class TiersView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerInfo: []
		};
	}

	componentDidMount() {
		const self = this;
		ax.get('http://localhost:5000/players')
			.then(function(response) {
				console.log(response);
				self.setState({
					playerInfo: response.data
				});
			});
	}

	render() {
		const players = this.state.playerInfo.map(player => <Player name={player.name} />);
		return (
			<div>
				{ players }
			</div>
		);
	}
}