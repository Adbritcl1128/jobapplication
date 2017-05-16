(function() {
  'use strict';

  window.jobApp = window.jobApp || {};

  function checkLength (eventObj) {
    console.log(eventObj.target.value);
    if (eventObj.target.value.length >0) {
      eventObj.target.parentNode.parentNode.classList.remove('has-error');
    } else {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }
  }

  document.querySelector('#full-name')
  .addEventListener( 'blur', checkLength );


  function figureUpdate (eventObj) {
     eventObj.target.parentNode.childNodes[3]
    .innerText = eventObj.target.value + ' years';
  }


  document.querySelector('#exp')
  .addEventListener ( 'change', figureUpdate);


  let checkbox = 0;


  Array.from(document.querySelectorAll("[name=languages]")).forEach(function checkStatus(each) {
    each.addEventListener("change", function countLang(eventObj) {
      if (eventObj.target.checked === true) {
        checkbox++;
        console.log(checkbox);
      } else {
        languageCount--;
        console.log(checkbox);
      }
      eventObj.target.parentNode.parentNode.childNodes[7].innerText = checkbox + " languages";
    });
  });

  document.querySelector("form")
    .addEventListener("submit", function stopSubmit(e) {
      eventObj.preventDefault();
    });


}());
