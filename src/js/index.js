import 'babel-polyfill'
import React from 'react'
import configureStore from './store/index'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import FirstContainer from './containers/FirstContainer';

import '../sass/base.scss';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  	<div>
	  	Hello World!
	  	<FirstContainer />
	  </div>
  </Provider>,
  document.getElementById('root')
)

