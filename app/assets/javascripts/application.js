// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// // or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file.
// //
// // Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require foundation
// //= require_tree .
$(function() {
  $(document).foundation();
});


//     Stripe.createToken({
//       number: $('#card_number').val(),
//       cvc: $('#card_code').val(),
//       exp_month: $('#card_month').val(),
//       exp_year: $('#card_year').val()
//     }, stripeResponseHandler);

// function stripeResponseHandler(status, response) {
//   var $form = $('#payment-form');

//   if (response.error) {
//     // Show the errors on the form
//     $form.find('.payment-errors').text(response.error.message);
//     $form.find('button').prop('disabled', false);
//   } else {
//     // response contains id and card, which contains additional card details
//     var token = response.id;
//     // Insert the token into the form so it gets submitted to the server
//     $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//     // and submit
//     $form.get(0).submit();
//   }
// }

var user;
$(function() {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  return user.setupForm();
});
user = {
  setupForm: function() {
    return $('#new_user').submit(function() {
      $('input[type=submit]').attr('disabled', true);
      if ($('#card_number').length) {
        user.processCard();
        return false;
      } else {
        return true;
      }
    });
  },
  processCard: function() {
    var card;
    card = {
      number: $('#card_number').val(),
      cvc: $('#card_code').val(),
      expMonth: $('#card_month').val(),
      expYear: $('#card_year').val()
    };
    return Stripe.createToken(card, user.handleStripeResponse);
  },
  handleStripeResponse: function(status, response) {
    if (status === 200) {
      $('#user_stripe_card_token').val(response.id);
      return $('#new_user')[0].submit();
    } else {
      $('#stripe_error').text(response.error.message);
      $('#stripe_error').show();
      return $('input[type=submit]').attr('disabled', false);
    }
  }
};