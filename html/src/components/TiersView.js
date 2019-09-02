import React from 'react';

import { Player } from './Player';

export class TiersView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pickedPlayers: props.players.map(p => false)
		};
		this.updatePicks = this.updatePicks.bind(this);
		this.everyonePicked = this.everyonePicked.bind(this);
	}

	updatePicks(i) {
		let newPicks = this.state.pickedPlayers;
		newPicks[i] = true;
		this.setState({
			pickedPlayers: newPicks
		});
	}

	everyonePicked() {
		return this.state.pickedPlayers.reduce((allPicked, pick) => {
			return allPicked && pick;
		});
	}

	render() {
		let i = 0;
		const players = this.props.players.map(
			player => <Player name={player.name} 
												team={player.team} 
												position={player.position} 
												updateTier={this.updatePicks}
												key={player.name}
												order={i++}
			/>);
		return (
			<table className='table'>
				<thead className='thead-dark'>
					<tr>
						<th colSpan='4'>
							Tier { this.props.tier }
						</th>
					</tr>
					</thead>
					<tbody style={{ display: this.everyonePicked() ? 'none' : 'table-row-group' }}>
						{ players }
					</tbody>
			</table>
		);
	}
}