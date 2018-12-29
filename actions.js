// 'use strict';
// const{server, socketPopulate,socketPool}=require('./event-logger.js');

// const commands = {};

// let dispatchAction = (userId, buffer) => {
//     let entry = parse(buffer);
//     if ( entry && typeof commands[entry.command] === 'function' ) {
//       commands[entry.command](entry, userId);
//     }
//   };

//   //each one needs broken out
//   commands['@all'] =  (data, userId) => {
//     for( let connection in socketPool ) {
//       let user = socketPool[connection];
//       user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
//     }
//   };
//   //each one needs broken out
  
//   commands['@nick'] =  (data, userId) => {
//     socketPool[userId].nickname = data.target;
//   };
//   //each one needs broken out
  


//   module.exports={dispatchAction, ...commands};
