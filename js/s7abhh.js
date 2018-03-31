// Initialize your app
var myApp = new Framework7({
  smartSelectOpenIn:'picker'
});
// Export selectors engine
var $$ = Dom7;

console.log("s7abh.js loaded");

window.addEventListener("load", checkIfNewUser());

function checkIfNewUser(){
  if(localStorage.getItem("userHasVisited") === null){
      myApp.popup(".popup-welcome");
      console.log("localStorage element 'userHasVisited' is: " + localStorage.getItem("userHasVisited"));
      localStorage.setItem("userHasVisited", true);
  }
  if(localStorage.getItem("userHasVisited") === "true"){
      console.log("localStorage element 'userHasVisited' registered as'true'. It's value is: " + localStorage.getItem("userHasVisited"))
    }
}

function resetNewUser(){
  localStorage.removeItem("userHasVisited");
}


// Add views
var home = myApp.addView('#view-1', {
      dynamicNavbar: true
});

var apps = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var info = myApp.addView('#view-3', {
    dynamicNavbar: true
});

  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
  });

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var dayName = days[d.getDay()];
var dateNumber = d.getDate();
$$("#day_name").text(dayName);
$$("#date_number").text(dateNumber);
$$("#month_name").text(monthNames[d.getMonth()]);

myApp.onPageInit('photo&video', function (page) {
var recentlyAdded = new myApp.swiper('.apps-swiper', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
});

myApp.onPageInit('photo&video', function (page) {
var recentlyAdded = new myApp.swiper('.vip-swiper', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
});

myApp.onPageInit('photo&video', function (page) {
var recentlyAdded = new myApp.swiper('.category-swiper', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1.25,
    
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
});

myApp.onPageInit('photo&video', function (page) {
  var topFreePV = new myApp.swiper('.top-free-pv-swiper', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 1,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
  });
});

$$('.alert-text-title').on('click', function () {
    myApp.alert('Here goes alert text', 'Custom Title!');
});