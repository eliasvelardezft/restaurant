function generateAbout() {
  console.log('generating about ...');
  let container = document.getElementById('container');

  let chefImg = document.createElement('img');
  chefImg.setAttribute('src', '../src/images/about/chef.jpg');
  chefImg.setAttribute('id', 'chef-img');

  let title = document.createElement('h3');
  title.setAttribute('id', 'about-title');
  title.innerHTML = 'Facundo Castellani';

  let p = document.createElement('p');
  p.setAttribute('id', 'about-paragraph');
  p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  container.appendChild(title);
  container.appendChild(chefImg);
  container.appendChild(p);

}

export {
  generateAbout,
}