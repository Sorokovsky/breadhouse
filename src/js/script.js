const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const barbers = document.querySelectorAll('.barber');
barbers.forEach(barber =>{
    barber.addEventListener('click', (e) => {
        const target = e.target;
        if(target.parentElement.classList.contains('exit')){
            barber.classList.remove('_active');
        }
    });
});
function isWebp(){
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
    });
}
function toggleMenu(menu, burger){
    burger.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('_active') && menu.classList.contains('_active')){
            e.target.classList.remove('_active');
            e.target.children[0].classList.remove('_active');
            menu.classList.remove('_active');
        }else{
            e.target.classList.add('_active');
            e.target.children[0].classList.add('_active');
            menu.classList.add('_active');
        }
    });
}
toggleMenu(menu, burger);
isWebp();