var random = require('random-integer')
const getWord = function () {
    const WordSource =
        ['asshole',
            'idiot',
            'mad guy',
            'waste fellow',
            'not so bad',
            'Genious'];
    var randomNumber = random(4)
    return WordSource[randomNumber]
}




module.exports = {
    getWord,
    ProxyResponses: {
        '200': { statusCode: 200, headers: {'Access-Control-Allow-Origin': '*'}, body: JSON.stringify({ message: 'OK' }) },
        '400': { statusCode: 400, body: JSON.stringify({ message: 'Bad Request' }) },
        '405': { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) },
        '404': { statusCode: 404, body: JSON.stringify({ message: 'Not Found' }) },
    }

}
