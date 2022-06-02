const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const barbers = document.querySelectorAll('.barber');
const navLink = document.querySelectorAll('a');
const popubs = Array.from(document.querySelectorAll('.popub'));
popubs.forEach(popub => {
    popub.addEventListener('click', (e) => {
        const { target } = e;
        if (target.parentElement.classList.contains("exit")) {
            e.preventDefault();
            popub.classList.remove('_active');
            document.body.classList.remove('_lock')
        }
    });
});
Array.from(navLink).forEach(link =>{
    link.addEventListener('click', (e) => {
        const { target } = e;
        const selector = target.getAttribute('data-open');
        const el = document.querySelector(selector);
        if(el ){
            e.preventDefault(); 
              if(!el.classList.contains('_active')){
                  el.classList.add('_active');
                  document.body.classList.add('_lock');
                  menu.classList.remove('_active');
                  burger.classList.remove('_active');
                  closeAllPopubs();
                  burger.children[0].classList.remove('_active');
              } 
        }
        
    })
});
barbers.forEach(barber =>{
    barber.addEventListener('click', (e) => {
        const target = e.target;
        if(target.parentElement.classList.contains('exit')){
            barber.classList.remove('_active');
        }
    });
});

function isWebp(){
    document.querySelector('body').classList.add('no-webp');
}
    burger.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('_active')){
            e.target.classList.remove('_active');
            e.target.children[0].classList.remove('_active');
            menu.classList.remove('_active');
        }else{
            e.target.classList.add('_active');
            e.target.children[0].classList.add('_active');
            menu.classList.add('_active');
        }
    });
function closeAllPopubs(){
    const pops = Array.from(document.querySelector('.popub'));
    pops.forEach(pop => pop.classList.remove('_active'))
}
isWebp();