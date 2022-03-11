const images = ['img/pic-1.jpg',
'img/pic-2.jpg',
'img/pic-3.jpg',
'img/pic-4.jpg',
'img/pic-5.jpg',
'img/pic-6.jpg',
'img/pic-7.jpg',
];
let imgIndex = 0;
const sliderInterval = setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imrUrl = images[imgIndex];
    document.getElementById('image-container').innerHTML= `
<img src="${images[imgIndex]}" alt="" style="width: 800px; height: 600px;">
`
    imgIndex++;
}, 1000);

