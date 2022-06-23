document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // accept form submission

  const formEl = document.querySelector('#new-item-form');
  formEl.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', deleteAll);



})

// OUTSIDE

const handleFormSubmit = function(event){
  event.preventDefault();
  let title = event.target.title.value;
  let author = event.target.author.value;
  let category = event.target.category.value;

  let bookItem = {
    'title': title,
    'author': author,
    'category': category
  };

  const readingList = document.querySelector('#reading-list');


  // Create ele
  const newListItem = document.createElement('li');
  // Modify
  const categoryClass = category.split(' ').join('-').toLowerCase();
  newListItem.classList.add(categoryClass);
  const template = `
    <h2>${title}</h2>
    <p>${author}</p>
    <p>${category}</p>
  `;
  newListItem.innerHTML = template;
  // Attach Element
  readingList.appendChild(newListItem);
  
  formReset();
  
  console.log(`${bookItem.author}`);
}

const formReset = function(){
  const form = document.querySelector('#new-item-form');
  form.reset();
}

const deleteAll = function(){
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = "";
};
