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
    .innerText = eventObj.target.value + 'years';
      // console.log(eventObj.target.parentNode.childNodes);
  }

  document.querySelector('#exp')
  .addEventListener ( 'change', figureUpdate);

  function checkboxCount (eventObj) {
    let checkboxCount = 0;
    
    if (each.childNodes[1].checked) {
  }
    console.log(eventObj.target.checked);

  }


  Array.from( document.querySelectorAll('[name="languages"]'))
    .forEach(function eachBox (box) {
      box.addEventListener( 'change', checkboxCount );
    });



}());
