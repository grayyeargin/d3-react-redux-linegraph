import 'babel-polyfill'
import React from 'react'
import configureStore from './store/index'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Chart from './containers/Chart'
import Legend from './containers/Legend'
import { InitialData } from './utils/index'

import '../sass/base.scss';

const store = configureStore(InitialData)

ReactDOM.render(
  <Provider store={store}>
  	<div>
  		<Legend/>
	  	<Chart/>
	  </div>
  </Provider>,
  document.getElementById('root')
)

