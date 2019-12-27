var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylienTextApi = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express()

// Check for existence of required keys
if (!(('API_KEY' in process.env) &&
      ('APP_ID' in process.env))) {
    throw "ERROR: Could not find Aylien App ID and/or API Key." +
	" Is the .env file correctly placed?"
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API Key is ${process.env.API_KEY}, App ID is ${process.env.APP_ID}`);

var aylienApi = new aylienTextApi({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/analyze', function (req, res) {
    aylienApi.sentiment({
	'url': req.body.input
    }, function (apiErr, apiRes, apiRem) {
	console.log("**R: ", apiRes);
	console.log("**N: Remaining queries: ", apiRem);
	if (apiErr===null) {
	    res.send({success: true, remaining: apiRem, response: apiRes});
	} else {
	    res.send({success: false, remaining: apiRem, response: apiRes})
	}
    });
})
