$(document).ready(function(){
  
 // var api="https://en.wikipedia.org/w/api.php?action=opensearch&search=&callback=?";
  $("#wikibutton").click(function(){
    var search=$("#searchitem").val();
    console.log(search)
    var api='https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&callback=?';
    $.getJSON(api,function(data){
      $("#result").empty();
      for(var i=0;i<10;i++)
       {
         
         $("#result").append('<a href='+data[3][i]+'>'+data[1][i]+'</a><br><p>'+data[2][i]+'</p>');
         console.log(data[2][i]);
       }
      
    });
    
    
  });
  
});