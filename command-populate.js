'use strict';
const{parse}=require('./parse.js');
const{commands, socketPool}=require('./socketPool.js');
const event = require('./events.js');

//Commands
const addId = require('./commands/nicknames.js');
const dmUsers = require('./commands/dm.js');



//available commands for users
commands['@all'] =  (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);//writes to a specific user but is used for every user resulting in all
  }
};

commands['@nick'] =  (data,userId) => {//data is an event in net
  
  let promise = new Promise(function(resolve, reject) {
    event.emit('addId', addId(data, userId));;
  });
  promise.then(
    result => console.log('called'), // shows "done!" after 1 second
    error => console.log('error') // doesn't run
  );


};

// commands['@nick'] =  (data,userId) => {//data is an event in net
//   event.emit('promise', (data, userId));
  
// };

commands['@list']= (data,userId)=>{//needs data even though I am not using it
  for (let connection in socketPool){
    socketPool[userId].socket.write(socketPool[connection].nickname)

  }

}

commands['@dm']=(data, userId)=>{
    event.emit('dmUser', dmUsers(data, userId));


}

commands['@close']=(data, userId)=>{
  // console.log(data.target);
 
  socketPool[data.target.nickname].socket.emit('close'); 
  socketPool[data.target.nickname].socket.on('close', ()=>{
    delete socketPool[data.target];
  })

}







  module.exports={commands};