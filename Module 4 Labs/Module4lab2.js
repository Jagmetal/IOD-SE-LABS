// Exercise 1 and 2.

const artist = {
    name: 'Van Gogh',
    portfolio: [
      {
        title: 'portrait',
        url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image',
      },
      {
        title: 'sky',
        url: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg',
      },
    ],
  };
  
  function addCard(person) {
    const template = document.getElementById('card-template').content.cloneNode(true);
    template.querySelector('.card-title').innerText = person.name
    template.querySelector('.card-text').innerText = person.age;
    document.querySelector('#card-list').appendChild(template);
  }1
  
  if ('content' in document.createElement('template')) {
    const data = [
      { name: 'bob', age: 23 },
      { name: 'alice', age: 39 },
      { name: 'john', age: 32 },
      { name: 'Jag', age: 29},
      { name: 'Solid', age: 33},
      { name: 'Liquid', age: 33},
    ];
  
    data.forEach((person) => {
      addCard(person);
    });
  }
  