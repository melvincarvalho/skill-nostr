#!/usr/bin/env node

import 'websocket-polyfill'

console.log('getevents')

globalThis.data = {
  relay: 'wss://nostr-pub.wellorder.net',
  kind: 0
}

console.log('data', data)



var url = data.relay

var ws = new WebSocket(url)



ws.onopen = () => {
  console.log('connected to', url)
  send()

}

ws.onerror = err => {
  console.log('error connecting to relay', url)
  onError(err)
}

ws.onmessage = async e => {
  var data
  try {
    data = JSON.parse(e.data)
  } catch (err) {
    data = e.data
  }
  console.log('data', data)
}


function send() {
  // send
  var req = `["REQ", "test", {"kinds": [${data.kind}]}]`
  console.log('req', req)
  ws.send(req)
}
