
    // handle form submission
    $('form').submit(function(event) {
      event.preventDefault();
  
      // validate form inputs
      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var message = $('#message').val().trim();
  
      if (name === '') {
        $('#name-error').show();
        return;
      }
  
      if (email === '') {
        $('#email-error').show();
        return;
      }
  
      if (!isValidEmail(email)) {
        $('#email-error').show();
        return;
      }
  
      if (message === '') {
        $('#message-error').show();
        return;
      }
  
      // hide error messages
      $('#name-error').hide();
      $('#email-error').hide();
      $('#message-error').hide();
  
      // disable submit button and show loader
      $('button[type="submit"]').prop('disabled', true);
      $('#loader').show();
  
      // submit data to API
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: {
          name: name,
          email: email,
          message: message
        }
      }).done(function(response) {
        // clear form inputs and show success message
        $('form')[0].reset();
        $('#data').prepend('<div class="alert alert-success">Data submitted successfully.</div>');
      }).fail(function(xhr, status, error) {
        // show error message
        $('#error').html('Error: ' + error).show();
      }).always(function() {
        // enable submit button and hide loader
        $('button[type="submit"]').prop()
        
      }
    )}  
}
    