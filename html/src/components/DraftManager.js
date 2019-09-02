import React from 'react';
import { TiersView } from './TiersView';
// import { TiersView } from './TiersView';
const ax = require('axios');

export class DraftManager extends React.Component {
	constructor() {
		super();
		this.state = {
			tiers: []
		};
	}

	componentDidMount() {
		const self = this;
		ax.get('http://localhost:5000/tiers')
			.then(function(response) {
				self.setState({
					tiers: response.data
				});
			});
	}

	render() {
		const tiers = this.state.tiers.map(tier => <TiersView players={tier} tier={tier[0].tier} key={tier[0].tier} />);
		return (
			<div className='container'>
				{ tiers }
			</div>
		);
	}
}