let parse = (buffer) => {
    let text = buffer.toString().trim();
    if ( !text.startsWith('@') ) { return null; }
    let [command,payload] = text.split(/\s+(.*)/);
    let [target,message] = payload.split(/\s+(.*)/);
    return {command,payload,target,message};
  };



module.exports={parse}
