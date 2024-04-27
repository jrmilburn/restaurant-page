import pageLoad from "./pageLoad";
import Menu from "./Menu";
import About from "./About";
import Order from "./Order";
import './index.css';

const nav = document.querySelector('nav');
const btns = document.querySelectorAll('button');
const content = document.querySelector('#content');

pageLoad();

btns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        content.textContent = '';
        if(btn.textContent === "Home"){
            pageLoad();
        }else if(btn.textContent === "About"){
            About();
        }else if(btn.textContent === "Menu"){
            Menu();
        }else if(btn.textContent === "Order"){
            Order();
        }
    })
})
