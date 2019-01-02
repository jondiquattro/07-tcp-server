'use strict';
const events = require('../events.js')
const{commands, socketPool}=require('../socketPool.js');

const{parse}=require('../parse.js');


  let addId = (data,userId) =>{
    socketPool[userId].nickname = data.target
  
  }
 

  events.on('addId', addId);

  module.exports=addId;