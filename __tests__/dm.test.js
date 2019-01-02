'use strict';

jest.mock('../socketPool.js');//any function in socketpool is now socketPool = jest.fn()
const dmUsers = require('../commands/dm');
const socketPool = require('../socketPool.js');




describe('@dm action', () => {

    it('sends nothing if the target user is not valid', () => {
      let commandObject = {
        command:'@dm',
        target:'nobody',
        message:'Hello'
      };


      console.log('from test', socketPool.socketPool)
      
      dmUsers(commandObject, 1);
      expect(socketPool[commandObject.target].socket.write).not.toHaveBeenCalled();
    });
  
    it('sends a message to a valid user', () => {
      let commandObject = {
        command:'@dm',
        target:'two',
        message:'Hello'
      };

      dmUsers(commandObject, 1);
      expect(socketPool[commandObject.target].socket.write).toHaveBeenCalled();
    });
  
  });