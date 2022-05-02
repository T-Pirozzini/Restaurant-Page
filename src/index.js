import home from './home';
import menu from './menu';
import contacts from './contacts';


const content = document.querySelector('#content');
// console.log(content);


home.renderHome();
contacts.renderContacts();
menu.renderMenu();

