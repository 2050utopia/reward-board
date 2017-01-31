import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './components/Board.jsx'
import './index.css';

var board = {progress: 10}

ReactDOM.render(
    <Board board={board} />,
    document.getElementById('root')
  )
