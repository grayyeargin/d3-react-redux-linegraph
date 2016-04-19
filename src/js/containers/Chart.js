import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import LineGraph from '../components/LineGraph';

export class FirstContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      	I am the first container...
        <LineGraph/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const ConnectedNode = connect(mapStateToProps)(FirstContainer)
export default ConnectedNode
