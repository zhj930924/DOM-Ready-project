//-----------------------------------------------
//   DOCUMENT READY
//-----------------------------------------------

$(document).ready(function() {

  //-----------------------------------------------
  //   Like
  //-----------------------------------------------
  $('.js-like').on('click', function(event) {
    event.preventDefault();

    $(this).text('Liked!')
    .closest('.news-item')
    .addClass('is-liked');

  });

  //-----------------------------------------------
  //   Add Link
  //-----------------------------------------------
  $('.js-add-link').on('click', function(event) {
    event.preventDefault();
    $('.js-form').toggleClass('is-visible');

  });


  //-----------------------------------------------
  //   Modal
  //-----------------------------------------------

});
