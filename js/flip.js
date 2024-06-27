function filterproducts()
    {
  var userinp = document.getElementById("searchinp").value;
  var userinput2 = userinp.toLowerCase();
  var images = document.querySelectorAll(".class-1 img");
  for(i=0;i<images.length;i++){
  var altxt = images[i].getAttribute("alt",userinput2);

 if(altxt.includes(userinput2)){
    images[i].style.display ="inline";
    images[i].parentNode.style.display ="inline";
 }
 else{
    images[i].style.display ="none";
    images[i].parentNode.style.display ="none";
 }
    }
}