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
            target.parentElement.classList.remove('fixed');
            console.log(target.parentElement);
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
                  const exit = el.children[0];
                  console.log(exit);
                  if(exit.classList.contains("exit")){
                      setTimeout(() => exit.classList.add("fixed"), 300);
                  }
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
            target.parentElement.classList.remove('fixed')
        }
    });
});

function isWebp(){
    document.querySelector('body').classList.add('no-webp');
}
    burger.addEventListener('click', (e) => {
        console.log(e.target);
        
        if (menu.classList.contains('_active')){
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            e.target.children[0].classList.remove('_active');
        }else{
            burger.classList.add('_active');
            menu.classList.add('_active');
            e.target.children[0].classList.add('_active');
        }
        e.preventDefault();
    });
function closeAllPopubs(){
    const pops = Array.from(document.querySelector('.popub'));
    pops.forEach(pop => pop.classList.remove('_active'))
}
function comment(){
    const comments = Array.from(document.querySelectorAll('.comment'));
    comments.forEach(comment => {
        let com = comment.innerHTML;
        console.log(com.length);
        if(com.length >= 120){
            comment.insertAdjacentHTML('afterend', `<a href="#" class="response__etc"><img src="img/icons/etc.svg" alt=""></a>`);
        }
    });
    const etcs = Array.from(document.querySelectorAll('.response__etc'));
    etcs.forEach(el => el.addEventListener('click', (e) => {
        const { target } = e;
        e.preventDefault();
        const com = target.parentElement.previousElementSibling;
        com.classList.toggle('open');
        console.log(com);
    }));
}
comment();
isWebp();