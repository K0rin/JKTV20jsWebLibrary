"use strict";

const newAuthor = document.getElementById('menu_new_author');
newAuthor.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_new_author');
});
const newBook = document.getElementById('menu_new_book');
newBook.addEventListener('click',(e)=>{
    toggleMenuActive('menu_new_book');
});
const buyBook = document.getElementById('menu_buy_book');
buyBook.addEventListener('click',(e)=>{
    toggleMenuActive('menu_buy_book');
});
const profile = document.getElementById('menu_profile');
profile.addEventListener('click',(e)=>{
    toggleMenuActive('menu_profile');
});
const adminPanel = document.getElementById('menu_admin_panel');
adminPanel.addEventListener('click',(e)=>{
    toggleMenuActive('menu_admin_panel');
});

function toggleMenuActive(selectedElementId){
    const menuElements = document.getElementsByClassName('nav-item');
    for (var i = 0; i < menuElements.length; i++) {
        if(menuElements[i].id === selectedElementId){
            if(!menuElements[i].classList.contains('active')){
                menuElements[i].classList.add('active');
            }
        }else{
            if(menuElements[i].classList.contains('active')){
                menuElements[i].classList.remove('active');
            }
        }
    }
}
