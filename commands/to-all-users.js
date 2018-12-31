'use strict';
const event = require('../events.js')
// const{socketPool} = require('../socketPool.js')
const{commands, socketPool}=require('../socketPool.js');

const{parse}=require('../parse.js');


  let addId = (data,userId) =>{
    socketPool[userId].nickname = data.target;

  }

  event.on('addId', addId);

  module.exports=addId;