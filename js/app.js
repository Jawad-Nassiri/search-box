const searches = [
  "The golden formula for work-life balance for programmers: from stress to peace",
  "5 key tips for choosing your first programming language to learn",
  "Prime number detection program in Python",
  "What is Natural Language Processing (NLP)?",
  "Which programming language is YouTube built with?",
  "Best AI tools for programming 🤩",
  "Best programming language for web development",
  "What is Object-Oriented Programming?",
  "Artificial intelligence in games: from smart enemies to dynamic worlds",
  "Programmers’ nightmares: 6 mistakes that can destroy your project!",
  "What is a DBMS?",
  "Golden debugging techniques for programmers",
];


const $ = document,
  inputElem = $.querySelector('input'),
  dropdownElem = $.querySelector('.dropdown'),
  containerElem = $.querySelector('.input-container')



  inputElem.addEventListener('input', () => {
    let searchValue = inputElem.value;

    let searchedValue = searches.filter(value => {
      return value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });

    

    if(searchedValue) {

      containerElem.classList.add('searching');
      dropdownElem.innerHTML = "";

      searchedValue.forEach(item => {

      dropdownElem.insertAdjacentHTML(
        'beforeend',
        `
          <div class="autocomplete-result">
            <a href="#" class="autocomplete-value">${item}</a>
          </div>
        `
      )
    });

    }

  })