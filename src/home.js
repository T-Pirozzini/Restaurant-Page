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
    signature.textContent = 'Mr. Potato Head';
    article1.appendChild(testimonialTitle);
    article1.appendChild(testimonial);
    article1.appendChild(signature);

    // hours
    const hourTitle = document.createElement('h2');
    hourTitle.textContent = 'Hours';
    const hoursM = document.createElement('p');
    const hoursT = document.createElement('p');
    const hoursW = document.createElement('p');
    const hoursTH = document.createElement('p');
    const hoursF = document.createElement('p');
    const hoursSA = document.createElement('p');
    const hoursSU = document.createElement('p');
    hoursM.textContent = 'Monday: 6am - 6pm'
    hoursT.textContent = 'Tuesday: 6am - 6pm'
    hoursW.textContent = 'Wednesday: 6am - 6pm'
    hoursTH.textContent = 'Thursday: 6am - 10pm'
    hoursF.textContent = 'Friday: 6am - 10pm'
    hoursSA.textContent = 'Saturday: 8am - 10pm'
    hoursSU.textContent = 'Sunday: 8am - 8pm' 
    article2.appendChild(hourTitle)
    article2.appendChild(hoursM)
    article2.appendChild(hoursT)
    article2.appendChild(hoursW)
    article2.appendChild(hoursTH)
    article2.appendChild(hoursF)
    article2.appendChild(hoursSA)
    article2.appendChild(hoursSU)

    // location
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = "Location"; 
    const location = document.createElement('p');
    location.textContent = '456 Potato Patch Lane, Farmville, Russet';
    article3.appendChild(locationTitle);
    article3.appendChild(location);
    
  }

  return {
    renderHome,
  };
})();

export default home;