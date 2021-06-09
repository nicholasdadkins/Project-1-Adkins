$(document).ready(function() {

    $('#contact_form').submit(function(e) {
      e.preventDefault();
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email = $('#email').val();
      var topic = $('#topic').val();
      var error = false;
  
      $(".error").remove();

      if (first_name.length < 1) {
        $('#first_name').after('<span class="error">This field is required</span>');
        error = true;
      }  
      if (last_name.length < 1) {
        $('#last_name').after('<span class="error">This field is required</span>');
        error = true;
      }
    if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
        error = true;
      } else {
        var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
          error = true;
        }
      }
      if (topic.length < 5) {
        $('#topic').after('<span class="error">Topic must be at least 5 characters long</span>');
        error = true;
      }
      if(error == false) {
          alert("sent");
      }
    });
  
  });


 







