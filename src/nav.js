import renderMenu from './menu';
import renderContacts from './contacts';
import renderHome from './home';

export default function renderNav() {
  const content = document.querySelector('#content');
  const footer = document.createElement("footer");
  content.appendChild(footer);
  
  let currentPage = ''; 

  // render home
  const home = document.createElement('button');
  home.textContent = "Home";
  home.classList.add('home');    
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
      content.innerHTML = '';      
      currentPage = "home";      
      renderHome();
      renderNav();
    }   
  })

  // render menu
  const menu = document.createElement('button');
  menu.textContent = "Menu";
  menu.classList.add('menu');    
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu")) {
      content.innerHTML = '';    
      currentPage = "menu";      
      renderMenu();
      renderNav();
    }
  })  

  // render contact
  const contact = document.createElement('button');
  contact.textContent = "Contact";
  contact.classList.add('contact');    
  contact.addEventListener("click", (e) => {
    if (e.target.classList.contains("contact")) {
      content.innerHTML = '';      
      currentPage = "contact";      
      renderContacts();
      renderNav();
    }   
  })
  
  footer.appendChild(home);
  footer.appendChild(menu);
  footer.appendChild(contact);  
}
