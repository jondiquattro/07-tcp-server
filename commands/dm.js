'use strict';
const event = require('../events.js')
const{parse}=require('../parse');
const{commands,socketPool} = require('../socketPool')

  let dmUsers = (data, userId) =>{
    console.log(socketPool.nickname[data.target], 'called from dm')
    socketPool.nickname[data.target].socket.userId(data.message)
    // socketPool[data.target].socket.write(data.message);//when parse runs you can access message through the data propert
  }
  event.on('dmUsers', dmUsers);

  module.exports=dmUsers;
