'use strict';
const{parse}=require('./parse.js');


//Third Party Modules
const uuid = require('uuid/v4');
const net = require('net');
const server = net.createServer();

//Global Objects
const socketPool = {};
const commands = {};


//connection event
server.on('connection', (socket) => {//creates the objects in socket pool
    let id = uuid();
    socketPool[id] = {
      id:id,
      nickname: `User-${id}`,
      socket: socket,
    };
    socket.on('data', (buffer) => dispatchAction(id, buffer));//every time someone types this is triggered
    
  });


  //executes action input from user
  let dispatchAction = (userId, buffer) => {//new buffer is created via data event
    let entry = parse(buffer);
    if ( entry && typeof commands[entry.command] === 'function' ) {
      commands[entry.command](entry, userId);
    }
  };
// let removeUser = (data)=>{
//   console.log(data);

//   // delete socketPool[entry.target];
// };


module.exports={server, commands, socketPool,dispatchAction, parse}