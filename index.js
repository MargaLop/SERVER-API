const http = require("http");
const request = require('request');

const host = 'localhost';
const port = 8000;
const options = {
    "method": "GET",
    "url": "https://api.openbrewerydb.org/breweries/random",
    "headers":{}
};

var cerveceriaJson = "{}"

const requestListener = function (req, res) 
{
    res.setHeader("content-Type", "application/json");
    res.writeHead(200);
    res.end(cerveceriaJson);
};

const serverCreated = function()
{
    console.log(`Server is running on http://${host}:${port}`);
}

const requestAction = function(error, response)
{
    if(error)
    {
        throw new  Error(error);
    }

    cerveceriaJson = response.body;
}

request(options, requestAction);

const server = http.createServer(requestListener);

server.listen(port, host, serverCreated);