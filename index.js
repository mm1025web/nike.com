if ($(window).width() < 768) {
     $(document).ready(function(){
          $("#myModal").modal('show');
     });
  }
$(window).ready(function(){
     setTimeout(function(){
          $('#form').modal('show');
     }, 7000);
     if($('.dropdown ul li').length==0){
          $(".button").hide(); 
          $("#total").hide();
          $("#cost").hide();    
     }
     else{
          $("#cost").show();
          $(".button").show();
          $("#total").show();
     }
          
});



var totalCost = 0;
  $('.buyNow').on('click',function(){
       //animation (+1)
     // alert($( ".ul li:nth-child(1)" ).attr( "id" ));
     
    $(".empty").hide();
    $(".button").show();
    let id = $(this).attr("id");
    $('#'+id+' .added__animation').css('opacity',1);
    $('#'+id +' .added__animation').css('transform',"scale(1) translateY(-140px)");
    setTimeout(function(){
          $('#'+id +' .added__animation').css('opacity',0);
          $('#'+id +' .added__animation').css('transform',"scale(0.6) translateY(100px)");
    },550);

    let src= $('#'+id+" img").attr("src");
    let cost = $('#'+id+" .cost").html();
    let tcost = parseInt(cost);
    
    totalCost+=tcost;

     $("#cost").html("₹"+totalCost);
     $("#cost").show();
     $(".button").show();
     $("#total").show();
//     alert(parseInt(cost))
     // $( ".ul li" ).each(function( index ) {
          // alert(".ul li:nth-child(0)".attr("id") );
          // alert(".ul li:nth-child("+ parseInt(index+1)+")".attr("id") );
          
     // });
    $("ul.dropdown-menu").prepend(
         `<li class="ml-2 item" id="${id}">  
            <a href="#" class="addedItem">
               <img class="selectedImage" src="${src}">
               <span class="product">Item</span>
               <span id="" class="selectedPrice">₹${cost}</span>
               </span> 
            </a>        
          </li>`
    ) 
    
    //<span aria-hidden="true" class="removeItem" id="${id}">&times;</span>
//     alert($('.dropdown ul li').length)

     
});
  

     $(".navbar-toggler").click(function(){
          // alert($(".navbar-toggler i").attr("class"))
          if($(".navbar-toggler i").attr("class")=="fas fa-angle-double-down"){
               // alert("HI")
               $(".navbar-toggler i").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
          }
          else if($(".navbar-toggler i").attr("class")=="fas fa-angle-double-up"){
               $(".navbar-toggler i").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
          }
     });

      var name = document.getElementById("name").value;
       document.getElementById("Name").value = name;
      ;
      $(".welcomeUser").click(function(){
        var name = $("#name").val();
     //    alert(name);
        $(".welcome").append("Welcome "+name);
      })
        
      
var button= $("#clickme"),count=0;
$(".buyNow").click(function(){
     count+=1;
     button.html(count);
})
$('.cart').click(function(){ 
    
     if($('.dropdown ul li').length>5){
       // $('.dropdown-menu').css("top", "100px");
       $('.ul').css("margin-top","100px");  
     }
     else{
          $('.ul').css("margin-top","0px");    
     }
   });
// function increment(){
//      count+=1;
//      button.innerHTML = count;     
     
// };

// function popup(){
//     alert("Unavailable");
// }
// $('.card').click(function(){ 
//     alert($(".card").attr("id"));   
//  }); 

$('.green').click(function(){ 
     $("#image").attr("src","images/shoes.png");   
 }); 
$('.blue').click(function(){ 
     $("#image").attr("src","images/shoes1.png");   
}); 
$('.pink').click(function(){ 
     $("#image").attr("src","images/shoes2.png");   
 }); 

$('.orange').click(function(){ 
     $("#image2").attr("src","images/nike110.png");   
 }); 
$('.yellow').click(function(){ 
     $("#image2").attr("src","images/nike120.png");   
}); 
$('.blue1').click(function(){ 
     $("#image2").attr("src","images/nike130.png");   
 }); 


$('.grey').click(function(){ 
     $("#image3").attr("src","images/nike71.png");   
 }); 
$('.blue2').click(function(){ 
     $("#image3").attr("src","images/nike73.png");   
}); 
$('.black').click(function(){ 
     $("#image3").attr("src","images/nike72.png");   
 }); 

$('.blue3').click(function(){ 
     $("#image4").attr("src","images/nike81.png");   
 }); 
$('.blue4').click(function(){ 
     $("#image4").attr("src","images/nike82.png");   
}); 
$('.red').click(function(){ 
     $("#image4").attr("src","images/nike83.png");   
 }); 

$('.black1').click(function(){ 
     $("#image5").attr("src","images/nike91.png");   
 }); 
$('.blue5').click(function(){ 
     $("#image5").attr("src","images/nike92.png");   
}); 
$('.gold').click(function(){ 
     $("#image5").attr("src","images/nike93.png");   
 }); 

$('.red1').click(function(){ 
     $("#image6").attr("src","images/nike101.png");   
 }); 
$('.golden').click(function(){ 
     $("#image6").attr("src","images/nike102.png");   
}); 
$('.green1').click(function(){ 
     $("#image6").attr("src","images/nike103.png");   
 }); 

