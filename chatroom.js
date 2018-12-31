'use strict';

const{commands}=require('./command-populate.js');
const{server,dispatchAction, parse}=require('./socketPool.js');

const port = process.env.PORT || 3001;

server;
parse;
dispatchAction;

commands['@all'];
commands['@nick'];
commands['@list'];
commands['@dm']
commands['@close']
server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});

