import {
  makeStore
}
from './src/store'
import startServer from './src/server';

export var store = makeStore()
startServer(store)

store.dispatch({
  type: "ADD_BOARD",
  newBoard: require("./data/boards.json")[0]
})
