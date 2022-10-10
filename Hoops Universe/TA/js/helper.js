// General purpose functions shared accross pages

// Toggle dropdown
function dropdown(){
    document.getElementById('content').classList.toggle('show')

    window.onclick = (event) => {
        if(!event.target.matches('.dropbtn-mobile')) {
            var dropdowns = document.getElementsByClassName('dropdown-content-mobile')
            
            for(var i = 0; i < dropdowns.length; i++)
            {
                var openDropdown = dropdowns[i]

                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show')
                }
            }
        }
    }
}   

// Hide navbar when scrolling down on mobile-view
document.addEventListener('DOMContentLoaded', () => {
    var prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("mobile-nav").style.top = "0";
        } else {
            document.getElementById("mobile-nav").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }
})

var products = {
    img1: {productName: "LeGoat 16 Phantom Black", productPrice: 1800000, src: "Assets/shoe/shoe1.jpg"},
    img2: {productName: "LeGoat 16 Red-Gray", productPrice: 1800000, src: "Assets/shoe/shoe2.png"},
    img3: {productName: "Air Yordan 3 Black", productPrice: 2300000, src: "Assets/shoe/shoe3.jpeg"},
    img4: {productName: "Air Yordan x DYOR", productPrice: 80000000, src: "Assets/shoe/shoe4.jpg"},
    img5: {productName: "Air Yordan Bred", productPrice: 2000000, src: "Assets/shoe/shoe5.jpg"},
    img7: {productName: "Kirye 5 Pastel", productPrice: 1800000, src: "Assets/shoe/shoe7.jpg"},
    img8: {productName: "KD Easy Money", productPrice: 2100000, src: "Assets/shoe/shoe8.jpg"},
    img9: {productName: "Kirye 5 Street", productPrice: 1800000, src: "Assets/shoe/shoe9.jpg"},
    img10: {productName: "Zion Zzzzz", productPrice: 1900000, src: "Assets/shoe/shoe10.jpg"},
    img11: {productName: "DON Mailman", productPrice: 1950000, src: "Assets/shoe/shoe11.jpg"},
    img12: {productName: "\"I'M 36!!!!!\" - RDCWorld", productPrice: 2100000,  src: "Assets/shoe/shoe12.jpg"},
    img13: {productName: "Greek Freak 2 Blue", productPrice: 1700000,  src: "Assets/shoe/shoe13.jpg"},
    img14: {productName: "DON Green AF", productPrice: 1950000, src: "Assets/shoe/shoe14.jpg"},
    img15: {productName: "KD 5 Gray", productPrice: 2100000, src: "Assets/shoe/shoe15.jpg"},
    acc1: {productName: "Ring Ring", productPrice: 3000000, src:"Assets/accessory/accessorie1.jpg"},
    acc2: {productName: "\"Shooters Shoot\" White", productPrice: 200000, src:"Assets/accessory/accessorie2.jpg"},
    acc3: {productName: "\"Shooters Shoot\" Black", productPrice: 200000, src:"Assets/accessory/accessorie3.jpg"},
    acc4: {productName: "Headband", productPrice: 100000, src:"Assets/accessory/accessorie4.jpg"},
    acc5: {productName: "Carnival Tracksuit", productPrice: 325000, src:"Assets/accessory/accessorie5.jpg"},
    acc6: {productName: "Gray Hoodie - Men", productPrice: 325000, src:"Assets/accessory/accessorie6.jpg"},
    acc7: {productName: "Gray Hoodie - Women", productPrice: 325000, src:"Assets/accessory/accessorie7.jpg"},
    acc8: {productName: "\"Guess The Color\" Tracksuit", productPrice: 325000, src:"Assets/accessory/accessorie8.jpg"},
    acc9: {productName: "Youngin' Wildin' Hoodie", productPrice: 250000, src:"Assets/accessory/accessorie9.jpg"},
    acc10: {productName: "Wilson?!?!", productPrice: 150000, src:"Assets/accessory/accessorie10.jpg"},
    acc11: {productName: "Spalding Official Game Ball", productPrice: 150000, src:"Assets/accessory/accessorie11.jpg"},
    acc12: {productName: "Tarmak Hardground", productPrice: 150000, src:"Assets/accessory/accessorie12.jpg"},
    acc13: {productName: "Timberwolves City Edition", productPrice: 325000, src:"Assets/accessory/accessorie13.jpg"},
    acc14: {productName: "76ers Home Edition", productPrice: 325000, src:"Assets/accessory/accessorie14.jpg"},
    acc15: {productName: "\"KOBEEEEEEE\"", productPrice: 325000, src:"Assets/accessory/accessorie15.jpg"},
    acc16: {productName: "Slippery Slides", productPrice: 125000, src:"Assets/accessory/accessorie16.jpg"},
}

$(document).ready(() => {
    var text = document.getElementsByClassName('textFade')
    
    $('.image-click').hover(function () {
        var currentID = $(this).attr('id')
        
        var productName = products[currentID].productName
        var productPrice = products[currentID].productPrice

        var price = parseInt(productPrice)
        let finalPrice = Number(price).toLocaleString()

        for(var i = 0; i < text.length; i++)
        {
            text[i].innerHTML = `${productName}\n${finalPrice}`
        }
    }) 
})