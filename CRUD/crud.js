$(document).ready(function() {
    // Show the form when the create button is clicked
    $("#create-button").click(function() {
      $("#form-div").show();
    });
  
    // Hide the form when the cancel button is clicked
    $("#cancel-button").click(function() {
      $("#form-div").hide();
    });
  
    // Submit the form data to the server when the submit button is clicked
    $("#submit-button").click(function(event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "data.php",
        data: $("#data-form").serialize(),
        success: function(data) {
          // Update the table with the new data
          $("#data-table").append(data);
          $("#form-div").hide();
        }
      });
    });
  });
  