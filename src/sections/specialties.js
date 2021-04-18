class FoodWrapper {
  constructor(title, img, description) {
    this.title = title;
    this.img = img;
    this.description = description;
  };
  createFoodWrapper() {
    let foodWrapper = document.createElement('div');
    foodWrapper.setAttribute('class', 'food-wrapper');

    let title = document.createElement('h3');
    title.innerHTML = this.title;

    let img = document.createElement('img');
    img.setAttribute('src', `../src/images/specialties/${this.img}.jpg`);
    img.setAttribute('class', 'specialty-img');

    let p = document.createElement('p');
    p.innerHTML = this.description;

    foodWrapper.appendChild(title);
    foodWrapper.appendChild(img);
    foodWrapper.appendChild(p);

    return foodWrapper;
  };
};

function generateSpecialties() {

  let container = document.getElementById('container');

  let food1 = new FoodWrapper('Mexican', 'mexican', 'mexican food is goooood ashee');
  container.appendChild(food1.createFoodWrapper());

  let food2 = new FoodWrapper('French', 'french', 'french food is goooood ashee');
  container.appendChild(food2.createFoodWrapper());

  let food3 = new FoodWrapper('Italian', 'italian', 'italian food is goooood ashee');
  container.appendChild(food3.createFoodWrapper());

};

export {
  generateSpecialties,
};