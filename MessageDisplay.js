
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
      messageRow.appendTo(row);
    } else {
      var emptyEntry = $('<td>');
      var messageRow = $('<td class=other>');
      messageRow.append(userMsg[i].message);
      emptyEntry.appendTo(row);
      messageRow.appendTo(row);
    }
  }

}
