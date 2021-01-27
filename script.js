'use strict';
let userVal = document.querySelector('.guess');
let btn = document.querySelector('.btn.check');
btn.addEventListener('click', function() {
  console.log(userVal.value);
});
