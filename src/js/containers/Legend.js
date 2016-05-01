import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import LegendValues from '../components/LegendValues';

export class Legend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LegendValues {...this.props} />
      </div>
    )
  }
}

Legend.propTypes = {
  LegendInfo: React.PropTypes.array
}

function mapStateToProps(state) {
	const lineData = state.lineData
  const legendInfo = Object.keys(state.lineData).map((line) => { 
  	return { 
  		title: lineData[line].title,
  		active: lineData[line].active,
  		index: line
  	}
   })

  return {
    legendInfo
  }
}

export default connect(mapStateToProps, actions)(Legend)