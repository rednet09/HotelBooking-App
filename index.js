
    



      $(document).ready(function() {
        // Get the list of hotels from the API
        $.getJSON("https://api.example.com/hotels", function(data) {
          var hotels = "";
          $.each(data, function(key, value) {
            hotels += "<div class='card'><div class='card-body'><h4 class='card-title'>" + value.name + "</h4><p class='card-text'>" + value.address + "</p><p class='card-text'>Stars: " + value.stars + "</p></div></div>";
          });
          $("#hotels").html(hotels);
        });

        // Handle form submission
        $("#hotel-form").submit(function(event) {
          event.preventDefault();
          var form = $(this);
          var formData = form.serialize();
          $.ajax({
            type: "POST",
            url: "https://api.example.com/hotels",
            data: formData,
            success: function() {
              alert("Hotel added successfully!");
              form[0].reset();
            },
            error: function() {
              alert("An error occurred while adding the hotel.");
            }
          });
        });
      });
    
 