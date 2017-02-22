import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import {Board_tests} from '../test/components/Board_spec'

var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
var win = doc.defaultView

global.document = doc
global.window = win

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App/>, div);
});

Board_tests()
