'use strict';

//imports modules
const events = require('./events.js');
const{parse}=require('./parse.js');

//imports commands

const dmUsers=require('./commands/dm');
const addId=require('./commands/nicknames');
const atAll=require('./commands/to-all-users');
const listAll=require('./commands/list-all');


const{server,commands,dispatchAction}=require('./socketPool.js');
const port = process.env.PORT || 3001;

//server functions from 
server;
parse;
dispatchAction;



commands['@all'] =  (data, userId) => {
  events.emit('atAll', data, userId);
}

commands['@list']= (data,userId)=>{
  events.emit('listAll', data, userId );
}

commands['@nick'] =  (data, userId) => {
  events.emit('addId', data,userId);
  
};
commands['@dm']= (data, userId)=>{
  events.emit('dmUsers', data, userId);
}
// commands['@close']=(data, userId)=>{
 
//   socketPool[data.target.nickname].socket.emit('close'); 
//   socketPool[data.target.nickname].socket.on('close', ()=>{
//     delete socketPool[data.target];
//   })

// }
server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});

