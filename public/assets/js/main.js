const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// show menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

// remove active className from nav items
const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classNameList.remove('active');
  })
}

// add active className to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classNameList.add('active');
  })
})


// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classNameList.toggle('show-content');
  if(readMoreContent.classNameList.contains('show-content')){
    readMoreBtn.textContent = "Show less";
  } else {
    readMoreBtn.textContent = "Show more";
  }
})


// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classNameList.toggle('show-items');
  })
})


// add box shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classNameList.toggle('show-box-shadow',window.scrollY > 0)
})