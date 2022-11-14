
//$("h1").addClass("big-title margin-50");
/*$("h1").click(function(){
  $("h1").css("color", "purple");
});
$("button").click(function(){
  $("h1").css("color", "purple");
})*/
$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("button").html("<em>Don't Click</em>");
