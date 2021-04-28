function generateMain() {

  let img = document.createElement('img');
  img.setAttribute('src', '../src/images/main/elias.jpg');
  img.setAttribute('id', 'main-img');

  let heading = document.createElement('h1');
  heading.innerHTML = 'Elias Velardez';

  let h2 = document.createElement('h2');
  h2.innerHTML = 'Software Developer';

  let description = document.createElement('p');
  description.innerHTML = `Hi! I'm Elias. I'm a Systems Engineering Student, currently in the third year.
  I'm twenty years old and I'm from Argentina.
  I really enjoy coding and learning to code, not only because I want to be able to make a living out of it but I also like doing it in my free time, its really fun for me!
  I like to learn everything that comes into my path, but my main interest is in the backend side of things (as you can tell from this webpage's design).
  I'm very interested in backend web development. Also, I like the data analysis field and I'm eager to dive more into it and the different branches related.
  I consider myself to be a fast-learner and I really love learning new stuff, so I'll be happy to learn anything that you throw at me.
  As well, I enjoy teamwork as there's no limit to what you can learn from other people's perspectives.`

  let container = document.getElementById('container');
  container.setAttribute('class', 'main-container');
  container.appendChild(img);
  container.appendChild(heading);
  container.appendChild(h2);
  container.appendChild(description);

}

export {
  generateMain,
}