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

// we'll load each file again on each request 
// this way we don't have to restart node each time. 
function loadLocal(file, callback){
  fs.readFile(file, function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

// handle requests.
var server = http.createServer(function(req, res){
  if(req.url === "/feed"){
    res.end(JSON.stringify(rssData));
  } else if(req.url === "/jquery.js"){
    loadLocal("jquery.js", function(data){ res.end(data); });
  } else if(req.url === "/trailers.js"){ 
    loadLocal("trailers.js", function(data){ res.end(data); });
  } else if(req.url === "/") {
    loadLocal("index.html", function(data){ res.end(data); });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

console.log("open http://localhost:4020 for the feed.");
server.listen(4020);
