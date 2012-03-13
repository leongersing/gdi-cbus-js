
/*
 * GET home page.
 */

var blogPosts = [
  { title: "ABC",
    body: "A B C , Its easy as 1 2 3 , as simple as do re mi, A B C, 1 2 3 baby you and me girl",
    id: 0,
    comments: 
    [{ username: "Leon", body:"FIRST!"},
    { username: "Justine", body:"This is a great time!"}
  ]},
  { title: "123",
    body: "Im gonna teach you how to sing it out come on, come on, come on reading, writing, arithmatic",
    id: 0,
    comments: 
    [{ username: "Leon", body:"FIRST!"},
    { username: "Justine", body:"This is a great time!"}
  ]},
];

var defaultBlogPost = { title: "", body: "", comments: []};
var currentIndex = 0;

var createBlogPost = function(data){
  for(var key in defaultBlogPost){
    if(! key in data){
      data[key] = defaultBlogPost[key];
    }
  }
  data.id = blogPosts.length;
  blogPosts.push(data);

};

var blogPostAtIndex = function(index){
  if(index >= blogPosts.length) index = 0;
  if(index < 0) index = blogPosts.length - 1;
  currentIndex = index;
  return blogPosts[currentIndex];
};

exports.index = function(req, res){
  var index = currentIndex;
  if(req.params.id) index = req.params.id;
  var blogPost = blogPostAtIndex(index);
  if(req.xhr){
    res.send( blogPost );
  } else {
    res.render('index', { blog: blogPost });  
  }
};

exports.newBlogPost = function(req, res){
  createBlogPost(req.body);
  res.send(201);
};

exports.newComment = function(req, res){
  var index = currentIndex;
  if(req.params.id) index = req.params.id;
  if(req.body.id) index = req.body.id;
  var post = blogPostAtIndex(index);
  post.comments.push(req.body);
  res.send(201);
};
