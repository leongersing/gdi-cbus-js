var http = require("http");
var fs = require("fs");
var FeedParser = require('feedparser');
var parser = new FeedParser();
var feedURL = "http://trailers.apple.com/trailers/home/rss/newtrailers.rss"
var rssData, indexFile, jqueryFile, trailersFile;

// load and cache data in memory.
parser.parseUrl(feedURL, function(error, meta, articles){
  rssData = { "meta": meta, "articles": articles };
});

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  indexFile = data;
});

fs.readFile('jquery.js', function (err, data) {
  if (err) throw err;
  jqueryFile = data;
});

fs.readFile('trailers.js', function (err, data) {
  if (err) throw err;
  trailersFile = data;
});

// handle requests.
var server = http.createServer(function(req, res){
  if(req.url === "/feed"){
    res.end(JSON.stringify(rssData));
  } else if(req.url === "/jquery.js"){
    res.end(jqueryFile);
  } else if(req.url === "/trailers.js"){ 
    res.end(trailersFile);
  } else if(req.url === "/") {
    res.end(indexFile);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

console.log("open http://localhost:4020 for the feed.");
server.listen(4020);
