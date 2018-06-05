$(document).ready(() => {
  $('#cart').on('mouseenter', () => {
    $('#cart .dropdown-menu').show();
  })

  $('#account').on('click', () => {
    $('#account .dropdown-menu').show();
  })

  $('#help').on('click', () => {
    $('#help .dropdown-menu').show();
  })

  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  })

})
