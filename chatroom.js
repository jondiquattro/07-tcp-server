'use strict';
const{server, socketPopulate,socketPool}=require('./event-logger.js');

const port = process.env.PORT || 3001;

const commands = {};

//modularize this

socketPopulate();

//modularize this
let parse = (buffer) => {
  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
  return {command,payload,target,message};
};

let dispatchAction = (userId, buffer) => {
  // function dispatchAction(userId, buffer){
  let entry = parse(buffer);
  if ( entry && typeof commands[entry.command] === 'function' ) {
    commands[entry.command](entry, userId);
  }
};

commands['@all'] =  (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

commands['@nick'] =  (data, userId) => {
  socketPool[userId].nickname = data.target;
};

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
//httpie command
//http http://localhost:8080/
//http http://localhost:8080/err
//http http://localhost:8080/foo
  module.exports={dispatchAction};
