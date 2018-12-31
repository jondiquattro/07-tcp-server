'use strict';
// const{}=require('./chatroom.js');
// const{commands}=require('./event.js');

const uuid = require('uuid/v4');

const net = require('net');
// Third Party Modules
const server = net.createServer();

const socketPool = {};
const commands = {};


let parse = (buffer) => {
    let text = buffer.toString().trim();
    if ( !text.startsWith('@') ) { return null; }
    let [command,payload] = text.split(/\s+(.*)/);
    let [target,message] = payload.split(/\s+(.*)/);
    return {command,payload,target,message};
  };




server.on('connection', (socket) => {//built in event to net
    let id = uuid();
  
    socketPool[id] = {
      id:id,
      nickname: `User-${id}`,
      socket: socket,
    };
    socket.on('data', (buffer) => dispatchAction(id, buffer));
  });

  let dispatchAction = (userId, buffer) => {
    let entry = parse(buffer);//how is this not a function

    if ( entry && typeof commands[entry.command] === 'function' ) {
      commands[entry.command](entry, userId);
    }
  };



module.exports={server, commands, socketPool,dispatchAction, parse}