'use strict';
const{dispatchAction}=require('./chatroom.js');


//////////////////////////////////////////////////
// First Party Modules
const net = require('net');
// Third Party Modules
const uuid = require('uuid/v4');
const server = net.createServer();

//globals
const socketPool = {};

///////////////////////////////////////////////////

function socketPopulate(){
    server.on('connection', (socket) => {
        let id = uuid();
      
        socketPool[id] = {
          id:id,
          nickname: `User-${id}`,
          socket: socket,
        };
      
      
        socket.on('data', (buffer) => dispatchAction(id, buffer));
      });
}



// function savedLog(){
//     saved.on('saved', (payload)=>{
//       console.log(`${payload} saved`);
    
//     })
//   }

//   function errorLog(){
  
//     error.on('error', (err) => {
//       console.error('whoops! there was an error', err);
//     })
//   }

  module.exports={uuid,server, socketPopulate,socketPool};