var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylienTextApi = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API Key is ${process.env.API_KEY}, App ID is ${process.env.APP_ID}`);

var aylienApi = new aylienTextApi({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY
});

aylienApi.sentiment({
    'text': 'How nice of you, sir!'
}, function (err, res) {
    console.log("**R ", res);
    console.log("**E", err);
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
/*app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
