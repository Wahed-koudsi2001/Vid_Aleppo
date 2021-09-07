// Navigation Bar
let muneIcon = document.querySelector('.mune-icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

muneIcon.onclick = function () {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}

// Change Background Img
let img = document.getElementById('img');
let imgs =
    [
        'images/beach.jpg',
        'images/beach2.jpg',
        'images/beach3.jpg'
    ];
function changeImg(img, imgs) {
    setInterval(function () {
        let randomImg = Math.floor(Math.random() * imgs.length);
        img.src = imgs[randomImg]
    }, 1000)
}
changeImg(img, imgs);
// icons in navbar

let show1 = document.getElementById('show1');
let showOne = document.getElementById('showOne');
let show2 = document.getElementById('show2');
let showTwo = document.getElementById('showTwo');
let show3 = document.getElementById('show3');
let showThree = document.getElementById('showThree');

show1.onclick = function () {
    showOne.classList.toggle('show1-show');
    showTwo.classList.remove('show2-show');
    showThree.classList.remove('show3-show');
}

show2.onclick = function () {
    showOne.classList.remove('show1-show');
    showTwo.classList.toggle('show2-show');
    showThree.classList.remove('show3-show');

}
show3.onclick = function () {
    showOne.classList.remove('show1-show');
    showTwo.classList.remove('show2-show');
    showThree.classList.toggle('show3-show');

}
