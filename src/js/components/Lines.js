import React, { Component } from 'react'
import d3 from 'd3'

export default class Lines extends React.Component{
	constructor(props) {
		super(props);

		this.generateLine = this.generateLine.bind(this)
  }

  generateLine(linePoint, line) {
  	const lineInfo = this.props.lineData[linePoint]
  	const dAttr = line(lineInfo.points),
  		lineProps = {
  			d: dAttr,
  			key: linePoint,
  			style: {stroke: this.props.color(linePoint)}
  		};

  	return <path className="data-line" {...lineProps} />
  }

  render() {
  	const { lineData, activeLines, xScale, yScale, color } = this.props
  	const line = d3.svg.line()
	    .interpolate("basis")
	    .x(function(d) { return xScale(d.x); })
	    .y(function(d) { return yScale(d.y); });

  	return (
  		<g>
	  		{
	  			activeLines.map((linePoint) => {
		  			return <g key={ 'data-point-' + linePoint } className="data-point">
		  				{this.generateLine(linePoint, line)}
		  			</g>
	  			})
	  		}
	  	</g>
  	)
  }
}
