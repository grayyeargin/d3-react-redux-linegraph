import React, { Component } from 'react'
import d3 from 'd3'

export default class YAxis extends React.Component{
	constructor(props) {
		super(props);

		this.renderAxis = this.renderAxis.bind(this)
    this.updateAxis = this.updateAxis.bind(this)
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.updateAxis();
  }


  renderAxis() {
    let node  = this.refs.yaxis;
    let yAxis = d3.svg.axis()
      .scale(this.props.yScale)
      .ticks(10)
      .orient("left");

    d3.select(node).call(yAxis);
  }

  updateAxis() {
    let node = this.refs.yaxis;
    let yAxis = d3.svg.axis()
      .scale(this.props.yScale)
      .ticks(10)
      .orient("left");

    d3.select(node)
      .transition()
      .duration(1000)
      .call(yAxis)
  }

  render() {
  	return (
  		<g className="axis y" ref="yaxis" transform={"translate(" + this.props.padding + ", 0)"}></g>
  	)
  }
}