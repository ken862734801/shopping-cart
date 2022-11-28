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
let offerSection = document.getElementById("offer-section");
let header = document.getElementById("header");
let sideNav = document.getElementById("sideNav");
let menuBars = document.getElementById("menu-bars");
let closeBtn = document.getElementById("close-btn");


function addBlur (){
    main.style.filter = "blur(1.25px)";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
    header.style.backgroundColor = "rgba(0, 0, 0, 0.005)";
    offerSection.style.backgroundColor = "rgba(0, 0, 0, 0.005)";
};
function removeBlur (){
    main.style.filter = "none";
    document.body.style.backgroundColor = "";
    header.style.backgroundColor = "";
    offerSection.style.backgroundColor = "";
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

// Functions & DOM elements for the collection section. //
let collectionContainer = document.getElementById("collection-container");
let previousBtn = document.getElementById("previous-btn");
let nextBtn = document.getElementById("next-btn");


let mens_shoes = [];
let wmns_shoes = [];
let kids_shoes = [];


function createProductCard (style) {
    // Element Creation.
    let itemContainer = document.createElement("div");
    let itemCard = document.createElement("div");
    let itemCardHeader = document.createElement("div");
    let itemCardBody = document.createElement("div");
    let itemImage = document.createElement("img");
    let itemPriceContainer = document.createElement("div");
    let retailPrice = document.createElement("h6");
    let msrpPrice = document.createElement("h6");
    let itemName = document.createElement("h6");

    // Element class name.
    itemContainer.className = "item-container";
    itemCard.className = "item-card";
    itemCardHeader.className = "item-card-header";
    itemCardBody.className = "item-card-body";
    itemPriceContainer.className = "item-price-container";
    retailPrice.className = "retail-price";
    msrpPrice.className = "msrp-price";
    itemName.className = "item-name";

    // TextContent and image src.
    itemImage.src = style.image;
    itemName.textContent = style.name;
    retailPrice.textContent = "$" + style.retail;
    msrpPrice.innerHTML = `<strike>$${style.msrp}</strike>`

    // Appending elements to each other and DOM.

    collectionContainer.appendChild(itemContainer);

    itemContainer.append(itemCard, itemName);
    itemCard.append(itemCardHeader, itemCardBody, itemPriceContainer);
    itemCardBody.append(itemImage);
    itemPriceContainer.append(retailPrice, msrpPrice);

}

// Function to change the current page. //

let current_page = 1;
let items_per_page = 6;

function prevPage(){
    if(current_page > 1){
        current_page--;
        changePage(current_page);
    }
};

function nextPage(){
    if(current_page < numPages()){
        current_page++;
        changePage(current_page)
    }
};

function changePage(page){
    if(page < 1) page = 1;
    if (page > numPages()) page = numPages();
    collectionContainer.textContent = "";
    
    for(let i = (page-1)*items_per_page; i < (page * items_per_page); i++){
        createProductCard(collection[i]);
    };
    if(page == 1){
        previousBtn.style.opacity = .55;
        previousBtn.style.cursor = "auto";
    }else {
        previousBtn.style.opacity = 1;
        previousBtn.style.cursor = "pointer";
    };

    if(page == numPages()){
        nextBtn.style.opacity = .55;
        nextBtn.style.cursor = "auto";
    }else {
        nextBtn.style.opacity = 1;
        nextBtn.style.cursor = "pointer";
    }
};

function numPages(){
    return Math.ceil(collection.length/items_per_page);
};

window.onload = function() {
    changePage(1);
};

nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", prevPage);

//Function to create the product object. //
class Product {
    constructor(name,image,retail, msrp){
        this.name = name;
        this.image = image;
        this.retail = retail;
        this.msrp = msrp;
    }
};
const mens_1 = new Product("Air Jordan 1 Mid","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e7fc8f3-76b7-4631-b147-4dad4b1ff241/air-jordan-1-mid-shoes-M2KS6n.png", 130 , 150 );
const mens_2 = new Product("Nike Air Force 1 '07","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png", 110 , 130 );
const mens_3 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_4 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_5 = new Product("Nike Metcon 8","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc7b28f9-30c5-405f-985b-3dc56984b2cb/metcon-8-mens-training-shoes-ppltpW.png", 130 , 150 );
const mens_6 = new Product("Air Jordan 7 Retro","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd3da02f-2ddc-4f0c-bb7b-f94c634cc0dd/air-jordan-7-retro-mens-shoes-7Zr804.png", 200 , 240 );

const mens_7 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_8 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_9 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_10 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_11 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_12 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );

const wmn_1 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_2 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_3 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_4 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_5 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_6 = new Product("Air Jordan 1 Mid SE", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c7da5594-709f-4f9d-8fec-5627122dbe18/air-jordan-1-mid-se-womens-shoes-B1XFDz.png", 125, 145);
const wmn_7 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);
const wmn_8 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);
const wmn_9 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);
const wmn_10 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);
const wmn_11 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);
const wmn_12 = new Product("Jordan Sophia", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3831dc7-7151-4fb4-82a3-d74306e9706a/jordan-sophia-womens-slides-bW5vFq.png", 85, 105);

const kid_1 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_2 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_3 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_4 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_5 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_6 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_7 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_8 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_9 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_10 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_11 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_12 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);


mens_shoes =[mens_1, mens_2, mens_3, mens_4, mens_5, mens_6,mens_7, mens_8, mens_9, mens_10,mens_11, mens_12]
wmns_shoes = [wmn_1, wmn_2, wmn_3, wmn_4, wmn_5, wmn_6, wmn_7, wmn_8, wmn_9, wmn_10, wmn_11, wmn_11];
kids_shoes = [kid_1, kid_2, kid_3, kid_4, kid_5, kid_6, kid_7, kid_8, kid_9, kid_10, kid_11, kid_12];

let collection = mens_shoes;

let mens = true;
let womens = false;
let kids = false;

function chooseCollection (e){
    if(e.target.id === "womens"){
        womens = true;
        currentCollection();
        collection = wmns_shoes;
        current_page = 1;
        changePage(current_page)
    }else if(e.target.id === "mens"){
        mens = true;
        currentCollection();
       collection = mens_shoes;
       current_page = 1;
       changePage(current_page)
    }else if(e.target.id === "kids"){
        kids = true;
        currentCollection();
        collection = kids_shoes;
        current_page = 1;
        changePage(current_page)
    }else{
        return
    }
};

let womensCollection = document.getElementById("womens");
let mensCollection = document.getElementById("mens");
let kidsCollection = document.getElementById("kids");

function currentCollection () {
    if(womens === true){
        womensCollection.style.color = "#FBB239";
        mensCollection.style.color = "black";
        kidsCollection.style.color = "black";
        womens = false;
        mens = false;
        kids = false;
    }else if (mens === true){
        womensCollection.style.color = "black";
        mensCollection.style.color =  "#FBB239";
        kidsCollection.style.color = "black";
        womens = false;
        kids = false;
        mens = false;
    }else if (kids === true){
        kidsCollection.style.color = "#FBB239";
        womensCollection.style.color = "black";
        mensCollection.style.color =  "black";
        womens = false;
        mens = false;
        kids = false;
    }
}

currentCollection();

let nav = document.querySelectorAll(".collection-style");

for(i=0; i < nav.length; i++){
    nav[i].addEventListener("click", chooseCollection);
};

let customerIcon = document.getElementById("customer-icon");
let closeModalBtn = document.getElementById("close-modal-btn");
let modal = document.getElementById("modal");

function showModal (){
    modal.style.display = "block";
};

function hideModal (){
    modal.style.display = "none";
}

customerIcon.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);

document.addEventListener( 'DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        type: 'loop',
        perPage: 2,
        gap: "1.5em",
        height: "140px",
        breakpoints: {
            1024: {
                perPage:1,
            },
            640: {
              perPage: 1,
              width:"75%",
            }
          }
      } );
      
      splide.mount();
  });
  
  class Client {
    constructor(name, occupation, image, testimonial){
        this.name = name;
        this.occupation = occupation;
        this.image = image;
        this.testimonial = testimonial;
    }
  }

  let clientContainer = document.getElementById("client-container");

  function createClientCard (client){

    let clientCard = document.createElement("div");
    let clientCardHeader = document.createElement("div");
    let clientPicture = document.createElement("div");
    let clientImage = document.createElement("img");
    let clientInformation = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let clientCardBody = document.createElement("div");
    let p3 = document.createElement("p");

    clientContainer.appendChild(clientCard);

    clientCard.append(clientCardHeader, clientCardBody);
    clientCardHeader.append(clientPicture, clientInformation);
    clientPicture.appendChild(clientImage);
    clientInformation.append(p1, p2);
    clientCardBody.appendChild(p3);

    clientCard.className = "client-card";
    clientCardHeader.className = "client-card-header";
    clientPicture.className = "client-picture";
    clientInformation.className = "client-information";
    p1.className = "yellow";
    clientCardBody.className = "client-card-body";

    clientImage.src = client.image;
    p1.textContent = client.name;
    p2.textContent = client.occupation;
    p3.textContent = client.testimonial;

  };

  let client_1 = new Client("Tyler The Creator", "Designer", "https://images.genius.com/d2a3ce3b4c89571274a7257d3a2cb5dd.1000x1000x1.jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");
  let client_2 = new Client("Bad Bunny", "Artist", "https://th.bing.com/th/id/R.ade28410db268820272118034c2c2463?rik=yQewxstBPJ3iDw&pid=ImgRaw&r=0", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");
  let client_3 = new Client("Tyler The Creator", "Designer", "https://images.genius.com/d2a3ce3b4c89571274a7257d3a2cb5dd.1000x1000x1.jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");
  let client_4 = new Client("Bad Bunny", "Artist", "https://th.bing.com/th/id/R.ade28410db268820272118034c2c2463?rik=yQewxstBPJ3iDw&pid=ImgRaw&r=0", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");
  let client_5 = new Client("Tyler The Creator", "Designer", "https://images.genius.com/d2a3ce3b4c89571274a7257d3a2cb5dd.1000x1000x1.jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");
  let client_6 = new Client("Bad Bunny", "Artist", "https://th.bing.com/th/id/R.ade28410db268820272118034c2c2463?rik=yQewxstBPJ3iDw&pid=ImgRaw&r=0", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora! Magnam ipsum suscipit id quidem. Consectetur adipisicing elit.");

  let clients = [client_1, client_2, client_3, client_4, client_5, client_6];

  let clientNextBtn = document.getElementById("client-next-btn");
  let clientPreviousBtn = document.getElementById("client-previous-btn");

  clientNextBtn.addEventListener("click", nextClients);
  clientPreviousBtn.addEventListener("click", prevClients);

  let current_clients = 1;

  let clients_per_page = 3;

//   function changeClientPerPage (){
//     if(window.matchMedia ("(max-width:768px").matches){
//         changeClients();
//         clients_per_page = 1;
//     }else{
//         changeClients();
//         clients_per_page = 3;
//     }
// };
$(window).resize(function(){
    windowWidth = $(window).width(); // get new width after change
    if(windowWidth <= 768){
        clients_per_page = 1;
        changeClients(current_clients);
    }else{
        clients_per_page = 3;
        changeClients(current_clients);
    }
});

// $(window).onload(function(){
//     windowWidth = $(window).width(); // get new width after change
//     if(windowWidth <= 768){
//         clients_per_page = 1;
//         changeClients(1);
//     }else{
//         clients_per_page = 3;
//         changeClients(1);
//     }
// })

jQuery(document).ready(function(){
    windowWidth = $(window).width(); // get new width after change
    if(windowWidth <= 768){
        clients_per_page = 1;
        changeClients(current_clients);
    }else{
        clients_per_page = 3;
        changeClients(current_clients);
    }
});

window.onresize = changeClients(current_clients);
window.onload = changeClients(current_clients);

// function myFunction() {
//     let width = window.innerWidth;
//     console.log(width);
//     if (width <= 768) {
//         clients_per_page = 1;
//         changeClients();
//     } else {
//         clients_per_page = 3;
//         changeClients();
//     }
// }
// window.onresize = myFunction();
// window.onload = myFunction();

// changeClientPerPage();


  function prevClients(){
    if(current_clients > 1){
        current_clients--;
        changeClients(current_clients);
    }
};

  function nextClients(){
    if(current_clients < numClients()){
        current_clients++;
        changeClients(current_clients)
    }
};

function changeClients(page){
    if(page < 1) page = 1;
    if (page > numClients()) page = numClients();

    clientContainer.textContent = "";
    
    for(let i = (page-1)*clients_per_page; i < (page * clients_per_page); i++){
        createClientCard(clients[i]);
    };
    if(page == 1){
        clientPreviousBtn.style.opacity = .55;
        clientPreviousBtn.style.cursor = "auto";
    }else {
        clientPreviousBtn.style.opacity = 1;
        clientPreviousBtn.style.cursor = "pointer";
    };

    if(page == numClients()){
        clientNextBtn.style.opacity = .55;
        clientNextBtn.style.cursor = "auto";
    }else {
        clientNextBtn.style.opacity = 1;
        clientNextBtn.style.cursor = "pointer";
    }
};

function numClients(){
    return Math.ceil(clients.length/clients_per_page);
};

window.onload = function() {
    changeClients(1);
};
