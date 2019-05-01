let quantityChildren;
const inputsContainer = document.querySelector('.inputs__container');
const personHavingChildren = document.querySelector('#input__person_having_children');
let buttonNext;
const buttonShowResults = document.querySelector('.button__show_results');
const mainContainer = document.querySelector('.main__container');

const createQuantityChildrenInput = () => {

  const personQuantityChildrenContainer = document.createElement('div');
  const laberForQuantityChildrenInput = document.createElement('label');
  const inputQuantityChildren = document.createElement('input');
  buttonNext = document.createElement('button');

  personQuantityChildrenContainer.classList.add('container__person_quantity_children', 'margin-bottom');

  laberForQuantityChildrenInput.classList.add('margin-bottom');
  laberForQuantityChildrenInput.htmlFor = 'input__person_quantity_children';
  laberForQuantityChildrenInput.textContent = 'How many kids do you have?';

  inputQuantityChildren.classList.add('margin-bottom');
  inputQuantityChildren.type = 'number';
  inputQuantityChildren.id = 'input__person_quantity_children';

  buttonNext.classList.add('button__next', 'margin-bottom');
  buttonNext.textContent = 'Next/Recount';

  personQuantityChildrenContainer.appendChild(laberForQuantityChildrenInput);
  personQuantityChildrenContainer.appendChild(inputQuantityChildren);
  personQuantityChildrenContainer.appendChild(buttonNext);

  return personQuantityChildrenContainer;

};

const showQuantityChildrenInput = () => {

  if (personHavingChildren.checked) {
    inputsContainer.insertBefore(createQuantityChildrenInput(), buttonShowResults);
    buttonNext = document.querySelector('.button__next')
    buttonNextFunc();
  } else {
    document.querySelector('.container__person_quantity_children').remove();
    correctionQuantityInputsForChildren();
  };

};

const correctionQuantityInputsForChildren = () => {
  
  let countRemove = document.querySelectorAll('.person__children_info_container').length;
  
  for(let i = 0; i < countRemove; i++) {
    document.querySelector('.person__children_info_container').remove();
  };

};

const getPersonQuantityChildren = () => {

  quantityChildren = document.querySelector('#input__person_quantity_children').value;
  
};

const createInputsForChildren = quantityChildren => {

  correctionQuantityInputsForChildren();
  
  for(let i = 0,j = 1; i < quantityChildren; i++, j++) {
    const childrenInputsContainer = document.createElement('div');
    const paragraph = document.createElement('p');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelAge = document.createElement('label');
    const inputAge = document.createElement('input');
    
    childrenInputsContainer.classList.add('margin-bottom', 'person__children_info_container', 'child' + j);
    
    if(i === 0) {
      paragraph.textContent = 'Enter the name and age of your first child.';
    } else {
      paragraph.textContent = 'Enter the name and age of your next child.';
    }
    
    labelName.classList.add('margin-bottom');
    labelName.htmlFor = 'input__person_child' + j + '_name';
    labelName.textContent = 'Child\'s name';
    
    inputName.classList.add('margin-bottom');
    inputName.type = 'text';
    inputName.id = 'input__person_child' + j + '_name';
    
    labelAge.classList.add('margin-bottom');
    labelAge.htmlFor = 'input__person_child' + j + '_age';
    labelAge.textContent = 'Child\'s age';
    
    inputAge.type = 'number';
    inputAge.classList.add('margin-bottom');
    inputAge.id = 'input__person_child' + j + '_age';
    
    childrenInputsContainer.appendChild(paragraph);
    childrenInputsContainer.appendChild(labelName);
    childrenInputsContainer.appendChild(inputName);
    childrenInputsContainer.appendChild(labelAge);
    childrenInputsContainer.appendChild(inputAge);
    
    inputsContainer.insertBefore(childrenInputsContainer, buttonShowResults);
  };

};

const showResults = () => {
  
  if(findEmptyInputs() === 0) {
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results__container');
    
    resultsContainer.innerHTML = '<p>Summary Information</p>';
    resultsContainer.innerHTML += '<p>Person:</p>';
    resultsContainer.innerHTML += '<p class="person-info">Name: ' + document.querySelector('#input__person_name').value + '</p>';
    resultsContainer.innerHTML += '<p class="person-info">Last name: ' + document.querySelector('#input__person_last_name').value + '</p>';
    resultsContainer.innerHTML += '<p class="person-info">Age: ' + document.querySelector('#input__person_age').value + '</p>';
    resultsContainer.innerHTML += '<p class="person-info">Height: ' + document.querySelector('#input__person_height').value + ' centimeters</p>';
    resultsContainer.innerHTML += '<p class="person-info">Weight: ' + document.querySelector('#input__person_weight').value + ' kilogram</p>';
    resultsContainer.innerHTML += '<p class="person-info">Gender: ' + document.querySelector('#select__person_gender').value + '</p>';
    resultsContainer.innerHTML += '<p class="person-info">Marital status: ' + document.querySelector('#select__person_marital_status').value + '</p>';
    
    if(personHavingChildren.checked) {
      resultsContainer.innerHTML += '<p class="person-info">Having children: Yes</p>';
      resultsContainer.innerHTML += '<p class="person-info">Quantity children: ' + document.querySelector('#input__person_quantity_children').value + '</p>';
      resultsContainer.innerHTML += '<p>Children:</p>';

      for(let i = 0, j = 1; i < quantityChildren; i++, j++) {
        resultsContainer.innerHTML += '<p class="person-info">Name: ' + document.querySelector('#input__person_child' + j + '_name').value +
        ' | ' + 'Age: ' + document.querySelector('#input__person_child' + j + '_age').value + '</p>';
      };

    } else {
      resultsContainer.innerHTML += '<p class="person-info">Having children: No</p>';
    };

    inputsContainer.style.display = 'none';
    mainContainer.appendChild(resultsContainer);

  } else {
    alert('Input error!');
  };
  
};

const findEmptyInputs = () => {

  const allInputs = document.querySelectorAll('input');
  let emptyInputs = 0;

  for(let i = 0; i < allInputs.length; i++) {
    if(allInputs[i].value === "") {
      emptyInputs++;
    };
  };
  
  return emptyInputs;
  
};

const buttonNextFunc = () => {

  buttonNext.addEventListener('click', function() {
    getPersonQuantityChildren();
    createInputsForChildren(quantityChildren);
  });
  
};

personHavingChildren.addEventListener('click', showQuantityChildrenInput);

buttonShowResults.addEventListener('click', showResults);














