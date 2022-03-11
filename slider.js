// 1. images need to store in an Array
const images = [
  "img/pic-1.jpg",
  "img/pic-2.jpg",
  "img/pic-3.jpg",
  "img/pic-4.jpg",
  "img/pic-5.jpg",
  "img/pic-6.jpg",
  "img/pic-7.jpg"
];

// 7. getElementById by calling, store globally (do not call inside loop/setInterval performance will loose)
const imgElement= document.getElementById("slider-image");

// 2. set initial value for array index
let imgIndex = 0;

// 3. create setInterval()
const sliderInterval = setInterval(() => {
  // 6. check condition if length is finished then start again from 0
  if (imgIndex >= images.length) { // use >= because index start from 0 and length start from 1, if use just > then last element will be undefined
    imgIndex = 0;
  }
  // 5. testing
  // console.log(imgIndex);

  // 9. Dynamically change image src
  const imgUrl = images[imgIndex];
  imgElement.setAttribute('src', imgUrl);
  // 4. increase value by 1
  imgIndex++;
}, 1000);
