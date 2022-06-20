  $( document ).ready( function(){
    $("#area").on("mouseenter" , (function(){
    alert("Click 'ok' to turn the box green.");          
    $( this ).css("background-color", "green");
    }));

    $('#reset').click( function(){
        $("#area").css("background-color", "#953674");
      });
    });





/*function alertHover(){
    document.getElementById("area").style.backgroundColor = "green";
    alert("Close me to turn the box green.");
  }
  
  function reset(){
     document.getElementById("area").style.backgroundColor = "#953674"; 
  }
  */


