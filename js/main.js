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
    buttonNext = document.querySelector('.button__next');
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
    };
    
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

const showResults = element => {
  inputsContainer.style.display = 'none';
  mainContainer.appendChild(element);
};

const createResultsContainer = () => {
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results__container');

  const paragraphPerson = document.createElement('p');
  paragraphPerson.textContent = 'Person:';

  const paragraphPersonName = document.createElement('p');
  paragraphPersonName.classList.add('person-info');
  paragraphPersonName.textContent = 'Name: ' + document.querySelector('#input__person_name').value;

  const paragraphPersonLastName = document.createElement('p');
  paragraphPersonLastName.classList.add('person-info');
  paragraphPersonLastName.textContent = 'Last name: ' + document.querySelector('#input__person_last_name').value;

  const paragraphPersonAge = document.createElement('p');
  paragraphPersonAge.classList.add('person-info');
  paragraphPersonAge.textContent = 'Age: ' + document.querySelector('#input__person_age').value;

  const paragraphPersonHeight = document.createElement('p');
  paragraphPersonHeight.classList.add('person-info');
  paragraphPersonHeight.textContent = 'Height: ' + document.querySelector('#input__person_height').value;

  const paragraphPersonWeight = document.createElement('p');
  paragraphPersonWeight.classList.add('person-info');
  paragraphPersonWeight.textContent = 'Weight: ' + document.querySelector('#input__person_weight').value;

  const paragraphPersonGender = document.createElement('p');
  paragraphPersonGender.classList.add('person-info');
  paragraphPersonGender.textContent = 'Gender: ' + document.querySelector('#select__person_gender').value;

  const paragraphPersonMaritalStatus = document.createElement('p');
  paragraphPersonMaritalStatus.classList.add('person-info');
  paragraphPersonMaritalStatus.textContent = 'Marital status: ' + document.querySelector('#select__person_marital_status').value;

  const paragraphPersonHavingChildren = document.createElement('p');
  paragraphPersonHavingChildren.classList.add('person-info');
  if(document.querySelector('#input__person_having_children').checked) {
    paragraphPersonHavingChildren.textContent = 'Having children: Yes';
  } else {
    paragraphPersonHavingChildren.textContent = 'Having children: No';
  };
  
  resultsContainer.appendChild(paragraphPerson);
  resultsContainer.appendChild(paragraphPersonName);
  resultsContainer.appendChild(paragraphPersonLastName);
  resultsContainer.appendChild(paragraphPersonAge);
  resultsContainer.appendChild(paragraphPersonHeight);
  resultsContainer.appendChild(paragraphPersonWeight);
  resultsContainer.appendChild(paragraphPersonGender);
  resultsContainer.appendChild(paragraphPersonMaritalStatus);
  resultsContainer.appendChild(paragraphPersonHavingChildren);

  if(document.querySelector('#input__person_having_children').checked) {
    const paragraphChildren = document.createElement('p');
    paragraphChildren.textContent = 'Children:';
    resultsContainer.appendChild(paragraphChildren);

    for(let i = 0, j = 1; i < quantityChildren; i++, j++) {
      const paragraphChild = document.createElement('p');
      paragraphChild.classList.add('person-info');
      paragraphChild.textContent = 'Name: ' + document.querySelector('#input__person_child' + j + '_name').value;
      paragraphChild.textContent += ' | Age: ' + document.querySelector('#input__person_child' + j + '_age').value;
      resultsContainer.appendChild(paragraphChild);
    };
  };

  return resultsContainer;
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

  buttonNext.addEventListener('click', () => {
    getPersonQuantityChildren();
    createInputsForChildren(quantityChildren);
  });
  
};

personHavingChildren.addEventListener('click', showQuantityChildrenInput);

buttonShowResults.addEventListener('click', () => {
  showResults(createResultsContainer());
});














