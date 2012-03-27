(function(context){
  var trailerFeed = "http://localhost:4020/feed";

  $(function(){
    $.getJSON(trailerFeed, function(data){ 
      console.log(data);
    });
  })
})(this);