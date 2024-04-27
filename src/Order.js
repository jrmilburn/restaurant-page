import Protein from './protein.jpeg';
const content = document.querySelector('#content');


function Order() {

    const heading = document.createElement('h1');
    const subheading = document.createElement('h2');
    const protein = document.createElement('img');
    const description = document.createElement('p');

    heading.textContent = "Order"
    subheading.textContent = "What are you feeling? Oh wait..."
    protein.src = Protein;
    description.textContent = "Pretend there is order functionality here";
    

    content.appendChild(heading);
    content.appendChild(subheading);
    content.appendChild(protein);
    content.appendChild(description);

}

export default Order;