'use strict';
const events = require('../events.js')
const{commands, socketPool}=require('../socketPool.js');
// const{parse}=require('../parse.js');


  let listAll = (data,userId) =>{
      //needs data even though I am not using it
  for (let connection in socketPool){
    socketPool[userId].socket.write(socketPool[connection].nickname)
  }
  }

  events.on('listAll', listAll);

  module.exports=listAll;