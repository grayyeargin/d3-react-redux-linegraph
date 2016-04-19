import 'babel-polyfill'
import React from 'react'
import configureStore from './store/index'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Chart from './containers/Chart';

import '../sass/base.scss';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  	<div>
	  	<Chart/>
	  </div>
  </Provider>,
  document.getElementById('root')
)

