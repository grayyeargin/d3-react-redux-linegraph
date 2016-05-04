import React from 'react'

export default class FilterValues extends React.Component {
	constructor(props) {
		super(props)

		// toggleActiveState = this.props.toggleActiveState
	}

	handleClick(e) {
		let lineIndex = e.target.id
		this.props.toggleActiveState(lineIndex)
	}

	render() {
		const lines = this.props.filterInfo
		const actions = this.props.actions
		return(
			<div>
				{
					lines.map( (line) => {
						return <div key={line.index}>
							<div className="roundcheck">
								<input className="roundcheck__input" onClick={this.handleClick.bind(this)} checked={line.active} type="checkbox" id={line.index} value={line.title} /> 
								<label className="roundcheck__label" htmlFor={line.index}></label>
							</div>
							{line.title}
						</div>
					})
				}
			</div>
		)
	}
}
