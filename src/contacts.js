export default function renderContacts() {
  // select content
  const content = document.querySelector('#content');

  // contact title
  const title = document.createElement('h1')
  title.classList.add('home-title')
  title.textContent = 'Contact Us';
  content.appendChild(title);

  // form
  const contactForm = document.createElement('section');
  contactForm.classList.add("form");

  const infoArr = [
    'Email: realEmail42@fake.com',
    'Phone: (250) 786-1456',
  ]

  for (let info of infoArr) {
    const infoLine = document.createElement('p');
    infoLine.textContent = info
    contactForm.appendChild(infoLine)
  }
  
  const contact = document.createElement('h2');
  contact.textContent = "We look forward to hearing from you!";
  
  contactForm.appendChild(contact);
  content.appendChild(contactForm);  
}


