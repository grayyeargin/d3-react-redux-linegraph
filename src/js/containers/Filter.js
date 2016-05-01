import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleActiveState } from '../actions'
import FilterValues from '../components/FilterValues';

export class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FilterValues {...this.props} />
      </div>
    )
  }
}

Filter.propTypes = {
  FilterInfo: React.PropTypes.array,
  actions: React.PropTypes.func
}

function mapStateToProps(state) {
	const lineData = state.lineData
  const filterInfo = Object.keys(state.lineData).map((line) => { 
  	return { 
  		title: lineData[line].title,
  		active: lineData[line].active,
  		index: line
  	}
   })

  return {
    filterInfo
  }
}

export default connect(mapStateToProps, {toggleActiveState})(Filter)