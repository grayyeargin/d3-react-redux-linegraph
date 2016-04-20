import React, { Component } from 'react'
import d3 from 'd3'

export default class XAxis extends React.Component{
	constructor(props) {
		super(props);

		this.renderAxis = this.renderAxis.bind(this)
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
  	let node  = this.refs.xaxis;
    let xAxis = d3.svg.axis()
	    .scale(this.props.xScale)
	    .ticks(10)
	    .orient("bottom");

    d3.select(node).call(xAxis);
  }

  render() {
  	return (
  		<g className="axis x" ref="xaxis" transform={"translate(0, " + (this.props.height - this.props.padding) + ")"}></g>
  	)
  }
}