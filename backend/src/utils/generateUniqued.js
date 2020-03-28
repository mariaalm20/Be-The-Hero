const crypto = require('crypto')

module.exports =  function generateUniqued(){
  return crypto.randomBytes(4).toString('HEX')
}