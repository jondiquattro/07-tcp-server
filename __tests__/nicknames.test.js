'use strict';

jest.mock('../socketPool.js');//any function in socketpool is now socketPool = jest.fn()
const dmUsers = require('../commands/dm');
const socketPool = require('../socketPool.js');


describe('@nick action', () => {

    it('sets the nickname propety of socketPool to data.target', () => {

        console.log(socketPool.server.listening);

        let commandObject = {
            command:'@dm',
            target:'jon',
            message:'Hello'
          };
     expect(socketPool.socketPool.id ).toBeTruthy();

          
    });
  
    // it('sends a message to a valid user', () => {

    // });
  
  });