import React from 'react';

import { Player } from './Player';

export class TiersView extends React.Component {
	render() {
		const players = this.props.players.map(
			player => <Player name={player.name} team={player.team} position={player.position} key={player.name} />);
		return (
			<table className='table'>
				<thead className='thead-dark'>
					<tr>
						<th colspan='4'>
							Tier { this.props.tier }
						</th>
					</tr>
					</thead>
					<tbody>
						{ players }
					</tbody>
			</table>
		);
	}
}