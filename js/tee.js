$(".nav-link").click(function(){
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

// Script For Date increment and Decrement
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number");
let a = 0;
plus.addEventListener("click", ()=>{
  a++;
  number.innerText = a;
});
minus.addEventListener("click", ()=>{
  if(a > 0){
    a--;
    number.innerText = a;
  }
});

  // var data = 0;
  // document.getElementById("number").innerText = data;
  // function decrement(){
  //     data = data-1;
  //     document.getElementById("number").innerText = data;
  // }
  // function increment(){
  //     data = data+1;
  //     document.getElementById("number").innerText = data;
  // }

  // Script for Booking section Button 
function SemiPrivate(){
  document.getElementById("booking_section_heading").innerHTML = "You are in the SemiPrivate Section";
  document.getElementById("semi_private_btn").style.backgroundColor = "#046A38";
  document.getElementById("semi_private_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
}
function LuxuryBox(){
  document.getElementById("booking_section_heading").innerHTML = "You are in the LuxuryBox Section";
  document.getElementById("luxury_box_btn").style.backgroundColor = "#046A38";
  document.getElementById("luxury_box_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
}
function DrivingRange(){
  document.getElementById("booking_section_heading").innerHTML = "1 Godzina  |  60 min";
  document.getElementById("driving_range_btn").style.backgroundColor = "#046A38";
  document.getElementById("driving_range_btn").style.color = "white";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
}

