//this script isn't working as planned needs fixing

// JS for toggling the features buttons
const simple = document.querySelector(".simple");
const speedy = document.querySelector(".speedy");
const easy = document.querySelector(".easy");
const bookmarking = document.querySelector(".bookmarking");
const searching = document.querySelector(".searching");
const sharing = document.querySelector(".sharing");

simple.addEventListener('click', open1);
speedy.addEventListener('click', open2);
easy.addEventListener('click', open3);

function open1() {
    bookmarking.style.display = 'flex';
    searching.style.display = 'none';
    sharing.style.display = 'none';
};

function open2() {
    bookmarking.style.display = 'none';
    searching.style.display = 'flex';
    sharing.style.display = 'none';
};

function open3() {
    bookmarking.style.display = 'none';
    searching.style.display = 'none';
    sharing.style.display = 'flex';
};