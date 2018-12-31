'use strict';
// const{parse}=require('./chatroom.js');
const{commands, socketPool}=require('./socketPool.js');


//should be a function that takes in an object 
commands['@all'] =  (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};


commands['@nick'] =  (data, userId) => {
  socketPool[userId].nickname = data.target;
};


  module.exports={commands};