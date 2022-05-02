const home = (() => {
  // select content
  const content = document.querySelector('#content');  

  function renderHome() {    
    content.classList.add('content-container');    

    // restaurant title
    const title = document.createElement('h1')
    title.classList.add('home-title')
    title.textContent = 'Spuddies';
    content.appendChild(title);

    // ARTICLES
    const article1 = document.createElement('article')
    const article2 = document.createElement('article')
    const article3 = document.createElement('article')
    content.appendChild(article1);
    content.appendChild(article2);
    content.appendChild(article3);
    
    // testimonial
    const testimonialTitle = document.createElement('h2');
    testimonialTitle.textContent = "Testimonial"; 
    const testimonial = document.createElement('p');
    testimonial.classList.add('testimonial');
    testimonial.textContent = 'Do you like potatos? Well Spuddies is the place to be! Everything potato for a great price!';
    const signature = document.createElement('p');
    signature.textContent = '- Mr. Potato Head';
    article1.appendChild(testimonialTitle);
    article1.appendChild(testimonial);
    article1.appendChild(signature);

    // hours
    const hoursArr = [
      'Sunday: 8am - 8pm',
      'Monday: 6am - 6pm',
      'Tuesday: 6am - 6pm',
      'Wednesday: 6am - 6pm',
      'Thursday: 6am - 10pm',
      'Friday: 6am - 10pm',
      'Saturday: 8am - 10pm',
    ]
    const hourTitle = document.createElement('h2');
    hourTitle.textContent = 'Hours';
    article2.appendChild(hourTitle)
    // generate hours with hoursArr
    for (let day of hoursArr) {      
      const dayHours = document.createElement('p')
      dayHours.textContent = day;
      article2.appendChild(dayHours);
    }  

    // location
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = "Location"; 
    const location = document.createElement('p');
    location.textContent = '456 Potato Patch Lane, Farmville, Russet';
    article3.appendChild(locationTitle);
    article3.appendChild(location);

    // Nav bar
    const footer = document.createElement("footer");
    content.appendChild(footer);
    const menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.classList.add('menu');    
    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu")) {
        console.log("Menu has been clicked!")
        // showMenu();
      }
    })    
    const contact = document.createElement('button');
    contact.textContent = "Contact";
    contact.classList.add('contact');    
    contact.addEventListener("click", (e) => {
      if (e.target.classList.contains("contact")) {
        console.log("Contact has been clicked!")
        // showContact();
      }
    })    
    footer.appendChild(menu);
    footer.appendChild(contact);
    
  }

  return {
    renderHome,
  };
})();

export default home;