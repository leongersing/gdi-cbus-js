/* GDI Lesson 3 */

(function(context){
  $(function(){
    var currentBlogId;
    var titleEl = $("#title");
    var bodyEl = $("#body");
    var commentUsernameEl = $("#commentUsername");
    var commentBodyEl = $("#commentBody");

    var commentsContainerEl = $("#comments");
    var commentTemplate = $("<div><strong class='username'></strong>: <span class='body'></span></div>");

    var createComment = function(username, commentBody){
      var newElement = commentTemplate.clone();
      newElement.find(".username").text(username);
      newElement.find(".body").text(commentBody);

      commentsContainerEl.append(newElement);
    };

    $("#saveComment").click(function(e){
      e.preventDefault();
      var user = commentUsernameEl.val();
      var body = commentBodyEl.val();
      var data = { username: user, body: body, id:currentBlogId };
      var url = "/";
      var onCompleteHandler = function(response){
        if(response === "Created") createComment(user, body);
        else context.alert("Could not create Comment.");
      };

      $.post(url, data, onCompleteHandler);
    });

    $.getJSON("/?id=0", function(blog){
      currentBlogId = blog.id;
      titleEl.text(blog.title);
      bodyEl.text(blog.body);
      commentsContainerEl.empty();
      for(var i=0; i< blog.comments.length;i++){
        var comment = blog.comments[i];
        createComment(comment.username, comment.body);
      }
    });

  });
})(this);
