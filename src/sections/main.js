function generateMain() {
  let container = document.getElementById('main-container');
  container.setAttribute('style', 'display: grid;');
  container.setAttribute('class', 'visible');
}

export {
  generateMain,
}