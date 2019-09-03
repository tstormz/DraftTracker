import React from 'react';
import { TiersView } from './TiersView';
import { Filter } from './Filter';
const ax = require('axios');

export class DraftManager extends React.Component {
	constructor() {
		super();
		this.state = {
			tiers: [],
			filter: 'none'
		};
		this.pick = this.pick.bind(this);
		this.setFilter = this.setFilter.bind(this);
	}

	componentDidMount() {
		const self = this;
		ax.get('http://localhost:5000/tiers')
			.then(function(response) {
				self.setState({
					tiers: response.data,
					pick: 1
				});
			});
	}

	pick(increment) {
		this.setState({
			pick: increment ? this.state.pick + 1 : this.state.pick - 1
		});
	}

	setFilter(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
		});
  };

	render() {
		const tiers = this.state.tiers.map(
			tier => <TiersView players={tier} 
												 tier={tier[0].tier} 
												 key={tier[0].tier}
												 onPick={this.pick}
												 filter={this.state.filter}
			/>);
		return (
			<div>
				<div className='position-fixed'>
					<h5 className='position-fixed pickCounter'>
						Pick { this.state.pick }
					</h5>
					<Filter option={this.state.filter} selectFilter={this.setFilter} />
				</div>
				<div className='container'>
					{ tiers }
				</div>
			</div>
		);
	}
}