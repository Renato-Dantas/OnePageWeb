let frame = document.getElementById('frame')
let ctx = frame.getContext("2d")

let img = new Image()
img.src = './img/office1.jpg'

let img2 = new Image()
img2.src = './img/office2.jpg'

img.onload = showImg;
img2.onload =showImg2;

function showImg(){
    ctx.drawImage(this, 100,30, 400,300)
}

function showImg2(){
    ctx.drawImage(this, 0,100,400,300)
}


