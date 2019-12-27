# Natural Language Processing Frontend Web App
This repository implements a Natural Language Processing (NLP) web app using
[Aylien API](https://aylien.com). This is how Wikipedia defines NLP

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

NLP typically is resource intensive. However, Aylien API makes it
simple for us. The app will use the API to determine various
attributes of a given piece of text.

## Usage Instructions

The app is constituted of a couple of parts: the frontend app and a
background server app. The former handles interactions with the user,
while the latter handles API interaction. The entire code is linted
using `eslint:recommended` configuration during webpack compile.

Here is how to get started in production mode:
+ Clone the repository to your machine, `cd` to app directory
+ Install required packages: `npm install`
+ Place a `.env` file containing two values: `APP_ID` and
  `API_KEY`. These refer to your personal Aylien 'Application ID' and
  'API Key' respectively. The file is not supplied with the repo for
  privacy purposes.
+ **[PRODUCTION MODE]** Start the production app: `npm run start` or
  simply `npm start`. Visit `localhost:8081` in your web browser.
+ **[DEVELOPMENT MODE]** Start the development app: `npm run
  start-dev`. This will automatically start a web browser session.

An example of `.env` file:
```
API_ID=**************************
API_KEY=**************************
```

**The App will NOT run if any of the above steps are not followed**. I
have tried to produce meaningful errors when there are issues like this.
