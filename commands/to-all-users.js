'use strict';
const events = require('../events.js')
const{commands, socketPool}=require('../socketPool.js');
// const{parse}=require('../parse.js');


  let atAll = (data,userId) =>{
      for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
//writes to a specific user but is used for every user resulting in all
  }

  events.on('atAll', atAll);

  module.exports=atAll;