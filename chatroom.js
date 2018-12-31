'use strict';

const{commands}=require('./event.js');
const{server,dispatchAction, parse}=require('./socketPool.js');

const port = process.env.PORT || 3001;


server;
parse;
dispatchAction;

commands['@all'];
commands['@nick'];


server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});

