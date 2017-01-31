import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {
  Map,
  List
}
from 'immutable'
import {
  initialState,
  defaultBoard,
  addBoard
}
from '../src/core'

export var stateWithBoard = addBoard(initialState, defaultBoard)
