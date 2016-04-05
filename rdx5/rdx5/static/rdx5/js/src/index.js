console.log('test')
import 'babel-polyfill'
import React from 'react'
import {createStore} from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import mainApp from './reducers/reducers'
//import 'todomvc-app-css/index.css'

const store = createStore(mainApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
