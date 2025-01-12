const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openmenu(){
    sideMenu.style.transform = 'translate(-16rem)'
}
function closemenu(){
    sideMenu.style.transform = 'translate(16rem)'
}

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg', 'shadoow-sm','dark:bg-darkThem', 'dark:shadow-white/20')
        navLinks.classList.remove('bg-white', 'shadoow-sm' , 'bg-opacity-50','dark:border','dar:border-white/50', 'dark:bg-transparent')
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg', 'shadoow-sm','dark:bg-darkThem', 'dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadoow-sm' , 'bg-opacity-50','dark:border','dar:border-white/50', 'dark:bg-transparent')
    }

})


//  ------------light mode and  dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)') .matches)) {
    document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    function toggleTheme(){
        document.documentElement.classList.toggle('dark')
        if(document.documentElement.classList.contains('dark')){
            localStorage.theme= 'dark';
        }
        else{
            localStorage.theme = 'light';
        }
    }