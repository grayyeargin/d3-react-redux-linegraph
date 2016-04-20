import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import LineGraph from '../components/LineGraph';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

export class Chart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LineGraph {...styles} {...this.props} />
      </div>
    )
  }
}

Chart.propTypes = {
  lineData: React.PropTypes.object,
  activeLines: React.PropTypes.array
}

function mapStateToProps(state) {
  const lineData = state.lineData
  const activeLines = Object.keys(lineData).filter((line) => { return lineData[line].active })

  return {
    lineData,
    activeLines
  }
}

export default connect(mapStateToProps)(Chart)
