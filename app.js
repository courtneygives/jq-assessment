// When the page loads, have a button on the DOM that says 'generate'. Upon clicking on that button, append a new container onto the DOM. That container should have two buttons, one that reads 'delete', the other that reads 'change'. Additionally, there should be text that provides a number. The number should be the number of times the 'generate' button has been clicked.
// The delete button should delete JUST the container that the button is in. The change button should change the background-color of the container to red. The default or 'normal' state of the background-color should be yellow. Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

$(function (){

  $(".hello-area").on("click", "button", "generate", function(){
    alert("generate!");
    $().toggleClass(".magic-container");
  });

  $(".magic-box").on("click", "button", "delete", function () {
    alert("delete!");
    $(this).toggleClass(".magic-box");
  });

  $(".magic-box").on("click", "button", "change", function () {
    alert("change!");

  });


});
