$('.submitbutton').on("click", function() {
var input = $('.submitinput').val();
var userMessage = {user: "you", message: input.toString()};
displayMessage(userMessage);
$('.submitinput').val("");
});
