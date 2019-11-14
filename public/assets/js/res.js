$(document).ready(function() {

    // Creates a new burger on the screen!

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        
        burger_name: $("#newburger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });
  

// Eats a burger
    $(".eatburger").on("click", function(event) {

      event.preventDefault();

      var id = $(this).data("id");
     
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



    // Deletes burger
    $(".trashburger").on("click", function(event) {

      event,preventDefault();

      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
          // Reload the page to get the updated list
        
      
    });

  });
  