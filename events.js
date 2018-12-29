'use strict';
const EventEmitter = require('events');
const data = new EventEmitter();//data is the event from the .on(error)
const connection = new EventEmitter();


// socket.on('data', (buffer) => dispatchAction(id, buffer));




module.exports={error,saved}