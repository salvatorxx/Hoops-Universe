// -- Form Validator Script --
function validate() {
    let qty = document.querySelector('#qty').value
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email')
    let num = document.querySelector('#phonenumber').value
    let postalCode = document.querySelector('#postalCode').value

    var eM = document.getElementById('errMsg')
    eM.innerText = ""
   
    
    if(qty < 1)
    {
        eM.innerText = "Quantity must be at least 1!"
        return false;
    }
    if(name.length < 3 || name.length > 30)
    {
        eM.innerText = "Name must be between 3 - 30 characters!"
        return false
    }

    if(num.length != 12 && num.length != 10)
    {
        eM.innerText = "Invalid phone number format!"
        return false
    }

    if(postalCode.length != 5)
    {
        eM.innerText = "Invalid postal code format!"
        return false
    }

    return true
}


// -- PAYMENT SCRIPT --
document.addEventListener('DOMContentLoaded', function() {
    let payment = document.querySelector('#paymentMethod')

    payment.addEventListener('change', function() {
        let paymentType = document.querySelector('#paymentMethod').value
        document.getElementById('QRCODE').src = ''
        document.getElementById('paymentLink').textContent = ''
        document.getElementById('QRSpan').style.visibility = "hidden"

        if(paymentType == "QRIS")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR1.png"
            return
        }

        if(paymentType == "OVO")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR2.png"
            return
        }

        if(paymentType == "Dana")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR3.png"
            return
        }

        if(paymentType == "Go-Pay")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR4.png"
            return
        }   

        // Takes random number as VA number
        const characters = '0123456789';
        const len = characters.length;
        
        let result = ' ';

        for (let i = 0; i < 16; i++ ) 
        {
            result += characters.charAt(Math.floor(Math.random() * len));
        }
        
        document.getElementById('paymentLink').textContent = `Virtual Account Number:\n${result}`        
    })

    // Shoe size validator
    let size = document.querySelector('#size')

    size.addEventListener('change', () => {  
        if(size.value < 38){
            alert("Size must be at least 38!")
            size.value = 38
        }
        if(size.value > 46){
            alert("Size doesn't go more than 50!")
            size.value = 50
        }
    })
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

// -- Load product info using url --
function getURLParameter(parameter) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var parameterName = sURLVariables[i].split('=');
        if (parameterName[0] == parameter)
        {
            return parameterName[1];
        }
    }
}

$(document).ready(function () {
    // Get info for current products
    const imageID = getURLParameter('imgid');
    const imageSource = products[imageID].src
    const productName = products[imageID].productName
    const productPrice = products[imageID].productPrice

    if(imageID.includes('acc'))
    {
        document.getElementById('size-class').style.display = "none"
    }

    // Place current image src
    $('#currentProduct').attr('src', imageSource)

    // Place current product name
    document.getElementById('product-name').innerText = productName

    // Magic stuff happening
    let qty = document.querySelector('#qty')
    let price = parseInt(productPrice)
    let totalPrice = document.getElementById('total-price')
    let pPrice = document.getElementById('product-price')

    // Format price & put product price
    let displayPrice = Number(price).toLocaleString()
    pPrice.innerText = 'Rp. ' + displayPrice
    totalPrice.innerText = 'Total: Rp. ' + displayPrice
    
    qty.addEventListener('change', function () {
        let changedQty = document.querySelector('#qty').value
        let total = changedQty * price
        totalPrice.innerText = 'Total: Rp. ' + Number(total).toLocaleString()
    })
})

// Go to checkout page on image click
$(document).ready(() => {
    $(".image-click").click(function () {
        const imageSource = $(this).attr("id")
        window.location.href = `checkout.html?imgid=${imageSource}`
    })
})
