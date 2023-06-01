
gsap.fromTo('.welcome__caption', {y: -100, opacity: 0}, {y: 0, duration: 1.5, delay: .5, ease: 'power1', opacity: 1})
gsap.to('.welcome__caption', {
    text: 'web developer in London',
    duration: 2,
    delay: .8,
    repeat: 2,
    repeatDelay: 1.5,
    ease: 'power1.in',
    yoyo: true
})
gsap.fromTo('.header', {opacity: 0}, {duration: 2, delay: 1.5, ease: 'power1', opacity: 1})
gsap.from('.headerLink', {opacity: 0, duration: 2, delay: 2, stagger: .5, ease: 'power1'})
gsap.fromTo('.welcomeLink', {opacity: 0}, {duration: 2, delay: 3, ease: 'power1', opacity: 1, stagger: .5})

const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('.header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
})

window.onscroll = () => {
    menuIcon.classList.remove('menu-icon--active');
    header.classList.remove('header--mobile');
}



const welcomeLinks = document.querySelectorAll('.welcome__links a');

welcomeLinks.forEach((btnLink, index) => btnLink.addEventListener('click', function(e) {
    e.preventDefault();
    const id = btnLink.getAttribute('href');
    const element = document.querySelector(id);
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'   
    })
}))


const tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide'));
    tabsBtns.forEach(item => item.classList.remove('active'));
}

function showTab(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('active');
}
hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', function(e) {
    e.preventDefault();
    hideTabs();
    showTab(index);
}))


const headerLinks = document.querySelectorAll('.headerLink');

function hideHeader() {
    headerLinks.forEach(item => item.classList.add('headerLink'));
    headerLinks.forEach(item => item.classList.remove('blue'));
}

function showHeader(index) {
    headerLinks[index].classList.add('blue');
    headerLinks[index].classList.remove('headerLink');
}

headerLinks.forEach((link, index) => link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const element = document.querySelector(id);
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'   
    })

    hideHeader();
    showHeader(index);
}))

