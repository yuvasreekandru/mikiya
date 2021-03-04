
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const links = document.querySelector(".sidebar");
links.addEventListener('click',function(){
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
})
//-----------Team owl carousel ------//
// $(document).ready(function(){
//   $("#each-one").owlCarousel({
//       items:1,
//       autoplay:true,
//       smartSpeed:750,
//       loop:true,
//       autoplayHoverPause:true,
//       // dots:false,
//       nav:true,
//       // navText:['<span><i class="fas fa-angle-left"</i></span>','<span><i class="fas fa-angle-right"</i></span>']
//   });
// });
