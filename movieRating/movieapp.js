

$("#movie-form").submit(function(e){
    e.preventDefault();
   let inputText=$("#movie").val();
   let inputRating=$("#rating").val();



  // $("tr").append$("td").append($("#movie").val()+" "+$("#rating").val());
  
 $("#movie_table").append('<tr><td>'+inputText+'</td>'+'<td>'+inputRating+'</td>'+'<td>'+'<input type="button" value="X" id="delete"></input></td></tr>');

 $("#movie_table").on('click','input[type="button"]',function(e){
   
    $(this).closest('tr').remove();

  })
   
  $("#movie-form").each(function(){

      this.reset();
  })
 

});