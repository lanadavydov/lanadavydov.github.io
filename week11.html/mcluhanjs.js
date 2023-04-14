let theMain = document.querySelector('main');

const images = [
    "media1.jpg","media2.jpg","media4.jpg",
    "media5.jpg","media6.jpg","media7.jpg","media8.jpg",
    "media9.jpg","media10.jpg","media11.jpg","media12.jpg",
    "media13.jpg","media14.jpg"
]

let i = 0

function drawImage(x, y){
    const nextImage = images[i]
    const img = document.createElement("img")
    img.setAttribute("src", nextImage)

    img.style.top = y + "px"
    img.style.left = x + "px"

    img.style.alignContent = "inherit"
    img.style.alignItems = "baseline"

    img.style.transform = "rotate(" + (Math.random)() * 20 + "deg)"

    theMain.appendChild(img)

    i = i + 1

    if (i >= images.length){
        i = 0
    }
}

document.addEventListener("click", function (event){
    event.preventDefault()
    drawImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function(event){
    event.preventDefault()
    drawImage(event.pageX, event.pageY)
})

// inspired by https://www.youtube.com/@SuperHi/videos