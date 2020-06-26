$(window).load(function(){
     setTimeout(function(){
         $('#form').modal('show');
     }, 6000);
  });

 $(document).ready(function(){
     $("#myModal").modal('show');
 });

 function myFunction(x) {
     x.classList.toggle("fa-angle-up");
   }

 
      var name = document.getElementById("name").value;
       document.getElementById("Name").value = name;
      ;



      function welcomeuser() {
        var name = document.getElementById("name").value;

        // step 1 create your element
        var element = document.createElement("h4");
        // step 2 create your text
        var text = document.createTextNode("Welcome! "+ name);
        // step 3 add (or append) your text to your element. Now your element had that new (or appended) value.
        element.appendChild(text);
        // step 4 add (or append) your newly created element with text to the tag with this id
        document.getElementById("Name").appendChild(element);
      }
// var button= document.getElementById("clickme"),count=0;

// function increment(){
//      count+=1;
//      button.innerHTML = count;     
     
// };
     




function changegreen(){
     document.getElementById("image").src="images/shoes.png";
}
function changeblue(){
    
     document.getElementById("image").src="images/shoes1.png";
}
function changepink(){
     document.getElementById("image").src="images/shoes2.png";
}


function changeorange(){
     document.getElementById("image2").src="images/nike41.png";
}
function changeyellow(){
    
     document.getElementById("image2").src="images/nike43.png";
   
}
function changesblue(){
     document.getElementById("image2").src="images/nike42.png";
}



function changegrey(){
     document.getElementById("image3").src="images/nike71.png";
}
function changebluee(){
     document.getElementById("image3").src="images/nike73.png";
}
function changeblackk(){
     document.getElementById("image3").src="images/nike72.png";
}



function changelblue(){
     document.getElementById("image4").src="images/nike81.png";
}
function changedblue(){
     document.getElementById("image4").src="images/nike82.png";
}
function changered(){
     document.getElementById("image4").src="images/nike83.png";
}


function changeblacck(){
     document.getElementById("image5").src="images/nike91.png";
}
function changebluue(){
     document.getElementById("image5").src="images/nike92.png";
}
function changegold(){
     document.getElementById("image5").src="images/nike93.png";
}


function changeredd(){
     document.getElementById("image6").src="images/nike101.png";
}
function changegolden(){
     document.getElementById("image6").src="images/nike102.png";
}
function changegreeen(){
     document.getElementById("image6").src="images/nike103.png";
}


