var userMessage = {user: "you", message: "sakjdfhasjdgnfsjdangf;jsdangf;kjsdangjs;dngjdsnfjgnsfd;kjgnsfdjgnsjnkjdasnf;kjsdngkjdsngkjsdangfkjsdhgjksdnfvknsdfkjghsfkjgnsdfjvnsdfphgfdisdfgsdfgsdfgrsdgfd"}
displayMessage(userMessage);
function displayMessage(userMessage) {
  var messageElm = $('<p width="35%" float=right>');
  var messageElmEnd = $('</p>');
  messageElm.append(userMessage.message);
  var conversationDiv = $('.messages');
  var messageDiv;
  if(userMessage.user === "you") {
    messageDiv = $('.myMessages');
    messageElm.appendTo(messageDiv);
    messageElmEnd.appendTo(messageDiv);
    console.log(messageDiv);
  } else {
    messageDiv = $('.otherMessages');
    messageElm.appendTo(messageDiv);
    messageElmEnd.appendTo(messageDiv);
  }

}
