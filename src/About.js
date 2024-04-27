import Protein from './protein.jpeg';
const content = document.querySelector('#content');


function About() {

    const heading = document.createElement('h1');
    const subheading = document.createElement('h2');
    const description = document.createElement('p');
    const desc2 = document.createElement('p');

    heading.textContent = "About"
    subheading.textContent = "Why we do what we do."
    description.textContent = "There's one thing we love more than protein... it's pizza. Why not get the best of both worlds?";
    desc2.textContent = 'fdjasl fdlsjklsjfds fajdas fjdla sjfdlksajljfd jflkdjsa fjlkdsj lkfdj fldsajlfdsaj lkfdjas fdjasl fdlsjklsjfds fajdas fjdla sjfdlksajljfd jflkdjsa fjlkdsj lkfdj fldsajlfdsaj lkfdjas fdjasl fdlsjklsjfds fajdas fjdla sjfdlksajljfd jflkdjsa fjlkdsj lkfdj fldsajlfdsaj lkfdjas fdjasl fdlsjklsjfds fajdas fjdla sjfdlksajljfd jflkdjsa fjlkdsj lkfdj fldsajlfdsaj lkfdjas';

    content.appendChild(heading);
    content.appendChild(subheading);
    content.appendChild(description);
    content.appendChild(desc2);

}

export default About;