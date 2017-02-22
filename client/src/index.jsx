import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {appEntry, testBoard} from './components/App'
import Board from './components/Board'
import {createStore} from 'redux';
import reducer from './reducer';
import './index.css'

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
     board: {
      total_size: 100,
      progress: 49
    }
  }
});

const routes = <Route component={appEntry}>
  <Route path="/" component={Board}  />
</Route>

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
)
