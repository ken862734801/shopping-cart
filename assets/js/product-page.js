let currentImage = document.getElementById("current-image");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];
let tab  = document.querySelectorAll(".tab-image");

function changeImage (event){
    if(event.target.classList.contains("tab-image")){
        console.log(event.target.src);
        currentImage.src = event.target.src;
    }
}
console.log(tab.length)

for(i = 0; i < tab.length; i++){
    tab[i].addEventListener("click", changeImage);
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('header-up').addClass('header-down');
        }
    }
    lastScrollTop = st;
}

// Functions & DOM elements for the side navigation. //

let main = document.getElementById("main");
let header = document.getElementById("header");
let sideNav = document.getElementById("sideNav");
let menuBars = document.getElementById("menu-bars");
let closeBtn = document.getElementById("close-btn");

let sideNavLinks = document.querySelectorAll(".side-navlink");

function closeSideTab (){
    for(i=0; i < sideNavLinks.length; i++){
        sideNavLinks[i].addEventListener("click", closeNav);
    }
};

closeSideTab();

function addBlur (){
    main.style.filter = "blur(1.25px)";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
    header.style.backgroundColor = "rgba(0, 0, 0, 0.005)";
};
function removeBlur (){
    main.style.filter = "none";
    document.body.style.backgroundColor = "";
    header.style.backgroundColor = "";
};
function openNav () {
    addBlur();
    sideNav.style.width = "70%";
    header.style.marginTop = "-60px";
};
function closeNav(){
    removeBlur();
    sideNav.style.width = "0";
    header.style.marginTop = "0";
};

menuBars.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
