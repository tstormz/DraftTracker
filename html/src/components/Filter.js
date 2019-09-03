import React from 'react';

export class Filter extends React.Component {

	render() {
		return (
			<ul>
				<li><input 
							type='radio' 
							name='filter' 
							value='none'
							onChange={this.props.selectFilter} />
						 None
				</li>
				<li><input 
							type='radio' 
							name='filter' 
							value='QB' 
							onChange={this.props.selectFilter} />
						 QB
				</li>
				<li><input 
							type='radio' 
							name='filter' 
							value='RB' 
							onChange={this.props.selectFilter} />
						 RB
				</li>
				<li><input 
							type='radio' 
							name='filter' 
							value='WR' 
							onChange={this.props.selectFilter} />
						 WR
				</li>
				<li><input 
							type='radio' 
							name='filter' 
							value='TE' 
							onChange={this.props.selectFilter} />
						 TE
				</li>
			</ul>
		)
	}

}