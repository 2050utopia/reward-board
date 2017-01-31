import Server from 'socket.io'

export default function startServer() {
  var io = new Server().attach(80)

  store.subscribe(() => io.emit('state', () => store.getState().toJS()))

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  })
}
