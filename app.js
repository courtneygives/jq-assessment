// When the page loads, have a button on the DOM that says 'generate'. Upon clicking on that button, append a new container onto the DOM. That container should have two buttons, one that reads 'delete', the other that reads 'change'. Additionally, there should be text that provides a number. The number should be the number of times the 'generate' button has been clicked.
// The delete button should delete JUST the container that the button is in. The change button should change the background-color of the container to red. The default or 'normal' state of the background-color should be yellow. Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

$(function (){  // document ready function


  // ------------- button: show magic box ------------- //

  $(".hello-area").on("click", "button", "generate", function(){
    $(".magic-box").toggle();
  });

  // ------------- button: hide magic box ------------- //

  $(".magic-box button[name='delete']").click(function () {
    $(".magic-box").toggle();
  });

  // ------------- button: change background color ------------- //
  var countColor = 0;

  $(".magic-box button[name='change']").click(function () {
    console.log($(".magic-box" ).css("background-color"));
    $(".counter").empty();
    if ($(".magic-box" ).css("background-color") == "rgb(255, 215, 0)") {
      $(".magic-box").css("background-color", "tomato");
      $(".magic-box").css("border", "2px solid firebrick");
    } else {
      $(".magic-box").css("background-color", "gold");
      $(".magic-box").css("border", "2px solid orange");
    }
    countColor += 1;
    $(".counter").append(countColor);
  });

});  // end document ready
