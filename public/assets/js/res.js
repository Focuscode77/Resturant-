$(function() {
    $(".eatburger").on("click", function(event) {
      var id = $(this).data("id");
    /  var newDevoured = $(this).data("newDevoured");
  
      var devouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        //   console.log("changed hungry to", newhunger);
          // Reload the page to get the updated list
          
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        
        burger_name: $("#newburger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".trashburger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  