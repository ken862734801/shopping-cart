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

// Splide functionality for the widgets.
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

// Class constructor to create a client object with a testimonial and profile picture.
class Client {
    constructor(name, occupation, image, testimonial){
        this.name = name;
        this.occupation = occupation;
        this.image = image;
        this.testimonial = testimonial;
    }
  }

// Function to create the client testimonial card dynamically.
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

// Client object variables and the array containing them.
let client_1 = new Client("Tyler The Creator", "Designer", "https://images.genius.com/d2a3ce3b4c89571274a7257d3a2cb5dd.1000x1000x1.jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora obis ipsa temporibus. Reprehenderit!");
let client_2 = new Client("Bad Bunny", "Artist", "https://th.bing.com/th/id/R.ade28410db268820272118034c2c2463?rik=yQewxstBPJ3iDw&pid=ImgRaw&r=0", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ipsa temporibus voluptatum. Magnam ipsum suscipit id quidem.");
let client_3 = new Client("Frank Ocean", "Singer", "https://th.bing.com/th/id/OIP.M-yt0unryvjypRbsT9sRAgHaHa?pid=ImgDet&rs=1", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora. Voluptatem consectetur eveniet elit.");
let client_4 = new Client("The Weeknd", "Singer", "https://th.bing.com/th/id/OIP.CgcVW1Peo_9rg_KF1is8_AHaHa?pid=ImgDet&rs=1", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora. Voluptatem consectetur eveniet sit.");
let client_5 = new Client("Mariah the Scientist", "Singer", "https://th.bing.com/th/id/OIP.QJuv6qmCK_SB2r3GhZ-iNAAAAA?pid=ImgDet&rs=1", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, assumenda tempora. Magnam ipsum suscipit id quidem.");
let client_6 = new Client("Jack Harlow", "Rapper", "https://yt3.ggpht.com/a-/AAuE7mBs-71z746uiAoQ1_vwUbkjIYLPcyxkLvjqgw=s900-mo-c-c0xffffffff-rj-k-no", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum suscipit id quidem. Ipsum dolor sit amet obis ipsa temporibus.");

let clients = [client_1, client_2, client_3, client_4, client_5, client_6];

// Variables for the DOM elements that user will interact with in the testimonial section.
let clientContainer = document.getElementById("client-container");
let clientNextBtn = document.getElementById("client-next-btn");
let clientPreviousBtn = document.getElementById("client-previous-btn");

let current_clients_page = 1;
let clients_per_page = 3;

// Function to see the previous testimonials.
function prevClients(){
    if(current_clients_page > 1){
        current_clients_page--;
        changeClients(current_clients_page);
    }
};

// Function to see the next testimonials.
function nextClients(){
    if(current_clients_page < totalPages()){
        current_clients_page++;
        changeClients(current_clients_page)
    }
};

// Function to change the clients depending on the current page. Generator client cards in this function.
// Adjust arrow opacity when last page is reached.
function changeClients(page){
    if(page < 1) page = 1;
    if (page > totalPages()) page = totalPages();
    
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

    if(page == totalPages()){
        clientNextBtn.style.opacity = .55;
        clientNextBtn.style.cursor = "auto";
    }else {
        clientNextBtn.style.opacity = 1;
        clientNextBtn.style.cursor = "pointer";
    }
};

function totalPages(){
    return Math.ceil(clients.length/clients_per_page);
};

// Change the clients that appear on window resize.
$(window).resize(function(){
    windowWidth = $(window).width();
    if(windowWidth <= 768){
        clients_per_page = 1;
        changeClients(current_clients_page);
    }else{
        clients_per_page = 3;
        changeClients(current_clients_page);
    }
});

// Change the clients that appear depending on window size at the time of page load.
jQuery(document).ready(function(){
    windowWidth = $(window).width();
    if(windowWidth <= 768){
        clients_per_page = 1;
        changeClients(current_clients_page);
    }else{
        clients_per_page = 3;
        changeClients(current_clients_page);
    }
});

window.onresize = changeClients(current_clients_page);
window.onload = changeClients(current_clients_page);

clientNextBtn.addEventListener("click", nextClients);
clientPreviousBtn.addEventListener("click", prevClients);

// Class constructor to create a product object with a name, image, and prices.
class Product {
    constructor(name,image,retail, msrp){
        this.name = name;
        this.image = image;
        this.retail = retail;
        this.msrp = msrp;
    }
};

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
// Variables for the men shoes object and array containing said variables.
const mens_1 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_2 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_3 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_4 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_5 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );
const mens_6 = new Product("Air Jordan 1 Low","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4936f14-2fba-4d88-a7d8-445d6582c3e4/air-jordan-1-low-mens-shoes-6jlL02.png", 110 , 130 );

const mens_7 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_8 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_9 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_10 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_11 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );
const mens_12 = new Product("Nike Air Max 90","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0aa27593-5556-43e0-b808-f723c9963bcf/air-max-90-mens-shoes-BjwJgG.png", 130 , 150 );

// Variables for the women shoes object and array containing said variables.
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

// Variables for the kids shoes object and array containing said variables.
const kid_1 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_2 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_3 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_4 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_5 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_6 = new Product("Nike Air Force 1 Premium","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aeeddc93-e208-4407-af29-3be439717f85/air-force-1-premium-big-kids-shoes-wJCwFb.png", 75, 90);
const kid_7 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_8 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_9 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_10 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_11 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);
const kid_12 = new Product("Nike Air Force 1 LV8 3","https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da87d43e-ec8e-4890-b913-37acf923c13b/air-force-1-lv8-3-big-kids-shoes-q3N9g3.png", 75, 90);

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

// Variables for the DOM elements of the collection section nav.
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
};

currentCollection();

let nav = document.querySelectorAll(".collection-style");

function navListener (){
    for(i=0; i < nav.length; i++){
        nav[i].addEventListener("click", chooseCollection);
    };
};

navListener();

// Functions & DOM elements for the collection section. //
let collectionContainer = document.getElementById("collection-container");
let previousBtn = document.getElementById("previous-btn");
let nextBtn = document.getElementById("next-btn");


//Variable and functions to change the current page. //
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

