/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== DARK MODE TOGGLE ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Get saved theme and icon from local storage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Helper function to get current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Validate if user previously chose a theme
if (selectedTheme) {
  // Add or remove dark-theme class based on local storage
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  // Toggle the icon class (Remix Icons)
  if (selectedIcon === 'ri-moon-line') {
      themeButton.classList.remove('ri-sun-line')
      themeButton.classList.add('ri-moon-line')
  } else {
      themeButton.classList.remove('ri-moon-line')
      themeButton.classList.add('ri-sun-line')
  }
} else {
  // Ensure default icon matches light theme if no preference
  themeButton.classList.add('ri-moon-line');
}

// Toggle theme on click
if(themeButton) {
    themeButton.addEventListener('click', () => {
        // Toggle body class
        document.body.classList.toggle(darkTheme)
        
        // Toggle icon
        if (themeButton.classList.contains('ri-moon-line')) {
            themeButton.classList.remove('ri-moon-line')
            themeButton.classList.add('ri-sun-line')
        } else {
            themeButton.classList.remove('ri-sun-line')
            themeButton.classList.add('ri-moon-line')
        }
        
        // Save to local storage
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}
