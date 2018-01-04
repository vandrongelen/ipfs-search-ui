'use strict';
var $ = require('jquery');

module.exports = $(function () {
  console.log('Hee daar');
  // Show logo initially
  $('.identity').show();

  // If search box is empty and has no focus 
  $('.search-box input').blur(function(){
    if( !$(this).val() ) {
      $('.cover').addClass('show');
      $('.identity').show();
    }
  });

  // If seach box has focus
  $('.search-box input').focus(function(){
      $('.identity').hide();
  });  
});

