import React from 'react'

export default class LegendValues extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const lines = this.props.legendInfo
		return(
			<div>
				{
					lines.map( (line) => {
						return <div key={line.index}>
							<input checked={line.active} type="checkbox" id={line.index} value={line.title} /> 
							<label htmlFor={line.index}>{line.title}</label>
						</div>
					})
				}
			</div>
		)
	}
}
