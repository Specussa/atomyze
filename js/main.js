// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start year
const year = document.querySelector('.footer__year');
if(year){
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start navbar
const menu = document.querySelector('.header__nav');
const menulist = document.querySelector('.header__list');
const burger = document.querySelector('.header__burger');

// button header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = null;
    document.documentElement.style.overflow = null;
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    menulist.scrollTo(0,0);
  }
})
// end header__burger

// start animation

document.addEventListener('DOMContentLoaded', function(){
  let header = document.querySelector('.header');
  let headeritem = document.querySelectorAll('.header__item');
  let headercontact = document.querySelectorAll('.header__contact');
  if(!header){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}else if (document.querySelector('.header__nav').classList.contains("active")){change.target.classList.add('animate');}else{headeritem.forEach(a=>a.classList.remove('animate'));headercontact.forEach(a=>a.classList.remove('animate'));}});}
    let headeropt = {threshold: [0.5]};
    let headerserv = new IntersectionObserver(onEntry, headeropt);
    for (let elm of headeritem) {headerserv.observe(elm);}
    let headercontactopt = {threshold: [0.5]};
    let headercontactserv = new IntersectionObserver(onEntry, headercontactopt);
    for (let elm of headercontact) {headercontactserv.observe(elm);}
  }

  let footer = document.querySelector('.footer');
  let footerblock = document.querySelectorAll('.footer__block');
  if(!footer){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let footeropt = {threshold: [0.5]};
    let footerserv = new IntersectionObserver(onEntry, footeropt);
    for (let elm of footerblock) {footerserv.observe(elm);}
  }

  let hero = document.querySelector('.hero');
  let heroblock = document.querySelectorAll('.hero__block .background__two');
  if(!hero){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let heroblockopt = {threshold: [0.5]};
    let heroblockserv = new IntersectionObserver(onEntry, heroblockopt);
    for (let elm of heroblock) {heroblockserv.observe(elm);}
  }

  let vacancy = document.querySelector('.vacancy');
  let vacancyblock = document.querySelectorAll('.vacancy__block .background__one');
  if(!vacancy){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let vacancyopt = {threshold: [0.5]};
    let vacancyserv = new IntersectionObserver(onEntry, vacancyopt);
    for (let elm of vacancyblock) {vacancyserv.observe(elm);}
  }

  let contacts = document.querySelector('.contacts');
  let contactsblock = document.querySelectorAll('.contacts__block .background__one');
  if(!contacts){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let contactsopt = {threshold: [0.5]};
    let contactsserv = new IntersectionObserver(onEntry, contactsopt);
    for (let elm of contactsblock) {contactsserv.observe(elm);}
  }

  let services = document.querySelector('.services');
  let servicesblock = document.querySelectorAll('.services__block .background__one');
  if(!services){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let servicesopt = {threshold: [0.5]};
    let servicesserv = new IntersectionObserver(onEntry, servicesopt);
    for (let elm of servicesblock) {servicesserv.observe(elm);}
  }

  let advantages = document.querySelector('.services__advantages');
  let advantagesblock = document.querySelectorAll('.services__advantages .background__three');
  if(!advantages){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let advantagesopt = {threshold: [0.5]};
    let advantagesserv = new IntersectionObserver(onEntry, advantagesopt);
    for (let elm of advantagesblock) {advantagesserv.observe(elm);}
  }

  let expertise = document.querySelector('.expertise');
  let expertisehead = document.querySelectorAll('.expertise__head');
  let expertiseitem = document.querySelectorAll('.expertise__item');
  if(!expertise){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let expertiseheadopt = {threshold: [0.5]};
    let expertiseheadserv = new IntersectionObserver(onEntry, expertiseheadopt);
    for (let elm of expertisehead) {expertiseheadserv.observe(elm);}
    let expertiseitemopt = {threshold: [0.5]};
    let expertiseitemserv = new IntersectionObserver(onEntry, expertiseitemopt);
    for (let elm of expertiseitem) {expertiseitemserv.observe(elm);}
  }

  let projects = document.querySelector('.projects');
  let projectshead = document.querySelectorAll('.projects__head');
  let projectstop = document.querySelectorAll('.projects__top .background__four');
  let projectsitem = document.querySelectorAll('.projects__item');
  let projectsinfo = document.querySelectorAll('.projects__info_desc');
  if(!projects){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let projectsheadopt = {threshold: [0.5]};
    let projectsheadserv = new IntersectionObserver(onEntry, projectsheadopt);
    for (let elm of projectshead) {projectsheadserv.observe(elm);}
    let projectstopopt = {threshold: [0.5]};
    let projectstopserv = new IntersectionObserver(onEntry, projectstopopt);
    for (let elm of projectstop) {projectstopserv.observe(elm);}
    let projectsitemopt = {threshold: [0.5]};
    let projectsitemserv = new IntersectionObserver(onEntry, projectsitemopt);
    for (let elm of projectsitem) {projectsitemserv.observe(elm);}
    let projectsinfoopt = {threshold: [0.5]};
    let projectsinfoserv = new IntersectionObserver(onEntry, projectsinfoopt);
    for (let elm of projectsinfo) {projectsinfoserv.observe(elm);}
  }

  let principles = document.querySelector('.principles');
  let principlesblock = document.querySelectorAll('.principles__head');
  let principlesflex = document.querySelectorAll('.principles__flex');
  if(!principles){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let principlesopt = {threshold: [0.5]};
    let principlesserv = new IntersectionObserver(onEntry, principlesopt);
    for (let elm of principlesblock) {principlesserv.observe(elm);}
    let principlesflexopt = {threshold: [0.5]};
    let principlesflexserv = new IntersectionObserver(onEntry, principlesflexopt);
    for (let elm of principlesflex) {principlesflexserv.observe(elm);}
  }

  let errorpage = document.querySelector('.error_page');
  let errorpageblock = document.querySelectorAll('.error_page__block');
  if(!errorpage){} else {
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let errorpageopt = {threshold: [0.5]};
    let errorpageserv = new IntersectionObserver(onEntry, errorpageopt);
    for (let elm of errorpageblock) {errorpageserv.observe(elm);}
  }
}, false);

// end animation