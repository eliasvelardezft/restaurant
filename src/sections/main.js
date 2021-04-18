function generateMain() {

  let img = document.createElement('img');
  img.setAttribute('src', '../src/images/main/restaurant.jpg');
  img.setAttribute('id', 'main-img');

  let heading = document.createElement('h1');
  heading.innerHTML = 'Terraza Ondina';

  let description = document.createElement('p');
  description.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  let container = document.getElementById('container');
  container.appendChild(img);
  container.appendChild(heading);
  container.appendChild(description);

}

export {
  generateMain,
}