import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import FirstComponent from '../components/FirstComponent';

export class FirstContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      	I am the first container...
        <FirstComponent/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const ConnectedNode = connect(mapStateToProps)(FirstContainer)
export default ConnectedNode
