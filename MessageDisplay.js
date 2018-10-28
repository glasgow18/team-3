var userMessage = [{user: "you", message: "sakjdfhasjdgnfsjdangf;jsdangf;kjsdangjs;dngjdsnfjgnsfd;kjgnsfdjgnsjnkjdasnf;kjsdngkjdsngkjsdangfkjsdhgjksdnfvknsdfkjghsfkjgnsdfjvnsdfphgfdisdfgsdfgsdfgrsdgfd"},
                    {user: "BobbyJones29", message: "hi there"}, {user: "BobbyJones29", message: "hi there"}, {user:"you", message: "pizza time"}];
displayMessage(userMessage);
function displayMessage(userMsg) {
  for(var i in userMsg) {
    var row = $('<tr>');
    var table = $('.table');
    row.appendTo(table);

    if(userMsg[i].user === "you") {
      var emptyEntry = $('<td>');
      var messageRow = $('<td class="my">');
      messageRow.append(userMsg[i].message);
      emptyEntry.appendTo(row);
      //messageDiv = $('.myMessages');
      messageRow.appendTo(row);
    } else {
      var emptyEntry = $('<td>');
      var messageRow = $('<td class=other>');
      messageRow.append(userMsg[i].message);
      //messageDiv = $('.otherMessages');
      emptyEntry.appendTo(row);
      messageRow.appendTo(row);
    }
  }

}
