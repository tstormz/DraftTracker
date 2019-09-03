import React from 'react';

export class Player extends React.Component {

	constructor() {
		super();
		this.state = {
			picked: false
		};
		this.handleChecked = this.handleChecked.bind(this);
		this.canShow = this.canShow.bind(this);
	}

	handleChecked() {
		const picked = !this.state.picked;
		this.setState({
			picked: picked
		});
		this.props.updateTier(this.props.order);
		this.props.onPick(picked);
	}

	canShow() {
		return this.props.filter === 'none' || this.props.filter === this.props.position;
	}

	render() {
		return (
			<tr style={{ display: this.canShow() ? 'table-row' : 'none' }}>
				<td>
					<input type='checkbox' onChange={ this.handleChecked }/>
				</td>
				<td style={{ textDecoration: this.state.picked ? 'line-through' : 'initial' }}>
					{ this.props.name }
				</td>
				<td>
					{ this.props.team }
				</td>
				<td>
					{ this.props.position }
				</td>
				<td>
					Bye { this.props.bye }
				</td>
			</tr>
		);
	}
}