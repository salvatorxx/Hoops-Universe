// Carousel Function
$(document).ready(() => {
    var index = 0
    var slides = document.getElementsByClassName("slides")

    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none"
    }
    slides[index].style.display = "block"

    $(".next").click(() => {
        index++
        index %= slides.length
    
        for(var i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none"
        }

        slides[index].style.display = "block"
    })

    $(".prev").click(() => {
        index--;
        if(index < 0) index = slides.length - 1

        for(var i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "none"
        }

        slides[index].style.display = "block"
    })
})

// Go to checkout page on image click
$(document).ready(() => {
    $(".image-click").click(function () {
        const imageSource = $(this).attr("id")
        window.location.href = `checkout.html?imgid=${imageSource}`
    })
})