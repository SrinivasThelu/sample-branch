const utils = require('./utils.js');

exports.handler = (event, context, callback) => {
    const word = utils.getWord();
    if (word) {
        let response = utils.ProxyResponses['200'];
        response.body = JSON.stringify({ 'word': word })
        callback(null, response)
    }
    else {
       let resonse = utils.ProxyResponses['500'];
       callback(response)
    }
}


