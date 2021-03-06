import React, { Component } from 'react'
import d3 from 'd3'
import Lines from './Lines'
import XAxis from './XAxis'
import YAxis from './YAxis'

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
    const colors = d3.scale.category10().domain(this.props.lines)
    
  	return (
  		<svg width={this.props.width} height={this.props.height}>
        <XAxis {...this.props} {...scales} />
        <YAxis {...this.props} {...scales} />
  			<Lines {...this.props} {...scales} colors={colors} />
  		</svg>
  	)
  }
}