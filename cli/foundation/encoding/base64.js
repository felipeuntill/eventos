const btoa  = require('btoa');
const atob  = require('atob');
const newlineRegex = /\n/g;

class base64 {
  static encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  static decode(str){
    var b64Decoded = atob(str.replace(newlineRegex, ''));
    var decodedWithUnicodeHexesRestored = Array.prototype.map.call(
      b64Decoded,
      hexEncodeCharCode
    )
    .join('');
    return decodeURIComponent(decodedWithUnicodeHexesRestored);
  }
}

function hexEncodeCharCode(c) {
  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}

module.exports = base64;
