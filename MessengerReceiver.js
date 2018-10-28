$('.submitbutton').on("click", function() {
var input = $('.submitinput').val();
var userMessage = [{user: "you", message: input.toString()}];
console.log(userMessage);
displayMessage(userMessage);
$('.submitinput').val("");
});
