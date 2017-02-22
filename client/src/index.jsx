import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {appEntry, testBoard} from './components/App'
import Board from './components/Board'
import './index.css'

const routes = <Route component={appEntry}>
  <Route path="/" component={Board} />
</Route>

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
)
