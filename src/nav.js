import renderMenu from './menu';
import renderContacts from './contacts';
import renderHome from './home';

export default function renderNav() {
  const content = document.querySelector('#content');
  const footer = document.createElement("footer");
  content.appendChild(footer);
  
  let currentPage = ''; 

  const home = document.createElement('button');
  home.textContent = "Home";
  home.classList.add('home');    
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
      content.innerHTML = ''; 
      console.log("Home has been clicked!")
      currentPage = "home";
      console.log(currentPage);
      renderHome();
      renderNav();
    }   
  })

  const menu = document.createElement('button');
  menu.textContent = "Menu";
  menu.classList.add('menu');    
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu")) {
      content.innerHTML = '';      
      console.log("Menu has been clicked!");
      currentPage = "menu";
      console.log(currentPage);
      renderMenu();
      renderNav();
    }
  })  

  const contact = document.createElement('button');
  contact.textContent = "Contact";
  contact.classList.add('contact');    
  contact.addEventListener("click", (e) => {
    if (e.target.classList.contains("contact")) {
      content.innerHTML = ''; 
      console.log("Contact has been clicked!")
      currentPage = "contact";
      console.log(currentPage);
      renderContacts();
      renderNav();
    }   
  })
  
  footer.appendChild(home);
  footer.appendChild(menu);
  footer.appendChild(contact);  
}
