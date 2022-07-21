//for toggling in the Question Section

const first = document.getElementById('first-question');
const second = document.getElementById('second-question');
const third = document.getElementById('third-question');
const fourth = document.getElementById('fourth-question');
const firstAnswer = document.getElementById('first-answer');
const secondAnswer = document.getElementById('second-answer');
const thirdAnswer = document.getElementById('third-answer');
const fourthAnswer = document.getElementById('fourth-answer');
const closeFirst = document.getElementById('closeFirstAnswer');
const closeSecond = document.getElementById('closeSecondAnswer');
const closeThird = document.getElementById('closeThirdAnswer');
const closeFourth = document.getElementById('closeFourthAnswer');

first.addEventListener('click', open1);
second.addEventListener('click', open2);
third.addEventListener('click', open3);
fourth.addEventListener('click', open4);
closeFirst.addEventListener('click', close1);
closeSecond.addEventListener('click', close2);
closeThird.addEventListener('click', close3);
closeFourth.addEventListener('click', close4);

function open1() {
    first.style.display = 'none';
    closeFirst.style.display = 'block';
    firstAnswer.style.display = 'block';
}

function open2() {
    second.style.display = 'none';
    closeSecond.style.display = 'block';
    secondAnswer.style.display = 'block';
}

function open3() {
    third.style.display = 'none';
    closeThird.style.display = 'block';
    thirdAnswer.style.display = 'block';
}

function open4() {
    fourth.style.display = 'none';
    closeFourth.style.display = 'block';
    fourthAnswer.style.display = 'block';
}

function close1() {
    closeFirst.style.display = 'none';
    first.style.display = 'block';
    firstAnswer.style.display = 'none';
}

function close2() {
    closeSecond.style.display = 'none';
    second.style.display = 'block';
    secondAnswer.style.display = 'none';
}

function close3() {
    closeThird.style.display = 'none';
    third.style.display = 'block';
    thirdAnswer.style.display = 'none';
}

function close4() {
    closeFourth.style.display = 'none';
    fourth.style.display = 'block';
    fourthAnswer.style.display = 'none';
}
