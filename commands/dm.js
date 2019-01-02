'use strict';
const events = require('../events.js')
const{commands, socketPool}=require('../socketPool.js');

const{parse}=require('../parse.js');

  let dmUsers = (data, userId) =>{
    // console.log(socketPool.nickname[data.target], 'called from dm')
    // socketPool.nickname[data.target].socket.userId(data.message)
    // console.log(data);
    console.log(socketPool);
    console.log(socketPool);



    socketPool[data.target].socket.write(data.message);//when parse runs you can access message through the data propert
  }


  events.on('dmUsers', dmUsers);

  module.exports=dmUsers;
