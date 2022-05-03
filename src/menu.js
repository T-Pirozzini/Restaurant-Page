export default function renderMenu() {
  // select content
  const content = document.querySelector('#content');

  // restaurant title
  const title = document.createElement('h1')
  title.classList.add('home-title')
  title.textContent = 'Menu';
  content.appendChild(title);

  //Menu Items
  let menuArr = [
    {
      title: 'Potatos!',
      img: '<img src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?b=1&k=20&m=157430678&s=170667a&w=0&h=EY1tYKyL7VK84Xrj3vXRQee29NocctYXWBkdGdDQIow=">',
      price: '$4.00',
    },
    {
      title: 'Stuffed!',
      img: '<img src="https://cdn.cnn.com/cnnnext/dam/assets/160406154447-baked-potato.jpg">',
      price: '$5.75',
    },
    {
      title: 'Scalloped!',
      img: '<img src="https://assets.epicurious.com/photos/576b3846d15dd24f6aefe069/16:9/w_1280,c_limit/old-fashioned-scalloped-potatoes.jpg">',
      price: '$7.00',
    },
  ]  

  for (let menuObj of menuArr) {    
    const menuDiv = document.createElement('div');
    content.appendChild(menuDiv);
    for (let item in menuObj) {      
      const menuItem = document.createElement('p');
      menuItem.innerHTML = menuObj[item];
      menuDiv.appendChild(menuItem);         
    }
  } 
}  
