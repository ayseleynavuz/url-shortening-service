# url-shortening-service

> API to create short urls using Node, Express and MongoDB

## Quick Start

```bash
# Install dependencies
npm init -y
npm i express config mongoose shortid valid-url
npm i -D nodemon 
npm install cors

# Edit the default.json file with your mongoURI and baseUrl

# Run
npm start
```

## Endpoint to create short url

### POST api/url/shorten

{ "longUrl": "xxxx" }
