const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky",window.scrolly>120);
});

let menu = document.querySelection('#menu-icon');
let navlist = document.querySelection('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classlist.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};