// Document.getElementByClassName('project-preview').addEventListener("click", message);
// function message(){
//     alert("Current in progress - Coming Soon!");
// }

   // toggle menu/navbar script
   document.querySelector('.menu-btn').click.addEventListener(toggleNav);
   function toggleNav(){
    // console.log("Show me the way!");
    document.querySelector('.navbar .menu').classList.toggle("active");
    document.querySelector('.menu-btn i').classList.toggle("active");
};

document.querySelector('.navbar .menu li a').click.addEventListener(smoothenOutScroll);
function smoothenOutScroll(){
    // applying again smooth scroll on menu items click
    document.querySelector('html').style.scrollBehavior = "smooth";
};

// Scroll btn to show and hide:

// document.querySelector(window).addEventListener('scroll',toggleScrollBtn);
// function toggleScrollBtn(){
//       // scroll-up button show/hide script
//       if(this.scrollY > 500){
//         document.querySelector('.scroll-up-btn').classList.add("show");
//     }else{
//         document.querySelector('.scroll-up-btn').classList.remove("show");
//     }
// };

 // slide-up script
//  document.querySelector('.scroll-up-btn').click(function(){
//     document.querySelector('html').animate({scrollTop: 0});
//     // removing smooth scroll on slide-up button click
//     document.querySelector('html').css("scrollBehavior", "auto");
// });

