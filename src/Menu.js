import Protein from './protein.jpeg';
const content = document.querySelector('#content');


function Menu() {

    const heading = document.createElement('h1');
    const subheading = document.createElement('h2');
    const menuItem1 = document.createElement('div');
    const itemHeading1 = document.createElement('h3');
    const itemImg1 = document.createElement('img');
    const itemDescription1 = document.createElement('p');

    const menuItem2 = document.createElement('div');
    const itemHeading2 = document.createElement('h3');
    const itemImg2 = document.createElement('img');
    const itemDescription2 = document.createElement('p');
    
    

    heading.textContent = "Joe's Pizzeria";
    subheading.textContent = "Menu";
    menuItem1.classList.add('menu-item');
    itemHeading1.textContent = "Protein Pizza";
    itemImg1.src = Protein;
    itemDescription1.textContent = "The signature protein pizza is the world's best post-gym snack. With 30g of clean protein, you can't go wrong.";
    
    menuItem2.classList.add('menu-item');
    itemHeading2.textContent = "Protein Pizza";
    itemImg2.src = Protein;
    itemDescription2.textContent = "Our special is so good... it's all we do :)";

    content.appendChild(heading);
    content.appendChild(subheading);

    menuItem1.appendChild(itemHeading1);
    menuItem1.appendChild(itemDescription1);
    menuItem1.appendChild(itemImg1);
    content.appendChild(menuItem1);

    menuItem2.appendChild(itemHeading2);
    menuItem2.appendChild(itemDescription2);
    menuItem2.appendChild(itemImg2);
    content.appendChild(menuItem2);

}

export default Menu;