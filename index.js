//nav bar variables
const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.open');
const mainMenu = document.querySelector('.mainMenu');


//for toggling the nav bar
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mobileMenu.style.display = 'flex';
    mainMenu.style.display = 'none';

    mobileMenu.style.top = '0';
}

function close() {
    mainMenu.style.display = 'flex';
    mobileMenu.style.top = '-100%';

}

//carousel variables


//for carousel



