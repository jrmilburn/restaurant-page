import Protein from './protein.jpeg';
const content = document.querySelector('#content');


function pageLoad() {

    const heading = document.createElement('h1');
    const subheading = document.createElement('h2');
    const proteinImg = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    heading.textContent = "Joe's Pizzeria";
    subheading.textContent = "Home of the world famous protein pizza";
    proteinImg.src = Protein;
    p1.textContent = 'Struggling to get the gains you deserve?';
    p2.textContent = 'Our protein pizza helps you reach your goals while curbing those stubborn pizza cravings';
    p3.textContent = "Don't believe us? Get the best gains of your life or your money back!";
    p4.innerHTML = "<em>T's & C's Apply</em>";

    content.appendChild(heading);
    content.appendChild(subheading);
    content.appendChild(proteinImg);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);

}

export default pageLoad;