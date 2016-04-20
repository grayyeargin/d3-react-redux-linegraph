import React, { Component } from 'react'
import d3 from 'd3'
import Lines from './Lines'

export default class LineGraph extends React.Component{
	constructor(props) {
		super(props);
  }

  coordinateMax(lineData, coordinate) {
    let max = d3.max(this.props.activeLines, (line) => {
      return d3.max(lineData[line]['points'], (point) => {
        return point[coordinate]
      })
    })

    return max
  }

  xScale(){
    return d3.scale.linear()
      .domain([0, this.coordinateMax(this.props.lineData, 'x')])
      .range([this.props.padding, this.props.width - this.props.padding * 2]);
  }

  yScale(){
    return d3.scale.linear()
      .domain([0, this.coordinateMax(this.props.lineData, 'y')])
      .range([this.props.height - this.props.padding, this.props.padding]);
  }

  render() {
    const scales = { xScale: this.xScale(), yScale: this.yScale() };
  	return (
  		<svg width={this.props.width} height={this.props.height}>
  			  <Lines {...this.props} {...scales} />
  		</svg>
  	)
  }
}