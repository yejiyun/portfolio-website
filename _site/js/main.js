$(document).ready(function(){
  $("#main-txt").typed({
    strings: ["Nice to meet you, ^500 <br>I hope you get brilliant insight and experience."],
    contentType: 'html',
    typeSpeed: 60
  });

  $("#site-title").bind("mouseover", function() {
    var doc = document.getElementById("topbar_logo").getSVGDocument();
    var path = doc.querySelectorAll("path");
    var rect = doc.querySelectorAll("rect");
    
    [].forEach.call(path, function(v) {
      v.setAttribute("fill", "gray");
    });

    [].forEach.call(rect, function(v) {
      v.setAttribute("fill", "gray");
    });
  });

  $("#site-title").bind("mouseout", function() {
    var doc = document.getElementById("topbar_logo").getSVGDocument();
    var path = doc.querySelectorAll("path");
    var rect = doc.querySelectorAll("rect");
    
    [].forEach.call(path, function(v) {
      v.setAttribute("fill", "black");
    });

    [].forEach.call(rect, function(v) {
      v.setAttribute("fill", "black");
    });
  });
});