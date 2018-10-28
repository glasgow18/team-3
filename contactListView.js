var contacts = [["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jack"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jane"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bobby"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jim"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jonah"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bill"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Joe"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "John"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Ben"]];

refreshContacts(contacts);

function refreshContacts(contacts) {
  var contactAvatars = $('#contactAvatars_ID');
  for (var i in contacts) {
    var img = $('<img id="dynamic">');
    img.attr('src', contacts[i][0]);
    img.attr('width', "20%");
    img.attr('height', "20%");
    var name = $('<p>');
    name.append(contacts[i][1]);
    var elem = $('<li class=userEntry>');
    elem.css("border-style", "solid");
    elem.css("border-width", "1px");
    elem.attr("id", contacts[i][1]);
    img.appendTo(elem);
    name.appendTo(elem);
    contactAvatars.append(elem);
  }
}

var currentSelected = null;

$('.userEntry').on('click', function() {
  if(currentSelected != null) {
    currentSelected.css("background-color", "#e9e9e9");
    currentSelected.css("color", "black");
  }
  $(this).css("background-color", "#3c70c4");
  $(this).css("color", "white");
  var userID = $(this).attr('id');
  currentSelected = $(this);
  $('.table').empty();
  getConversation(userID);
});

var Jack = {usr: "Jack", conversation: [{user: "you", message: "Sup"},
                    {user: "Jack", message: "hi there"}, {user:"you", message: "pizza time"}]};
var Bobby = {usr: "Bobby", conversation: [{user:"bobby", message: "Hey how's it going?"}, {user: "you", message: "Yeah not bad"}]};
var Jane = {usr: "Jane", conversation: [{user:"Jane", message: "You coming to the park today?"}, {user: "you", message: "Yeah!"}]};


var allConvos = [Jack, Bobby, Jane];

function getConversation(id) {
  for(i in allConvos) {
    if(allConvos[i].usr === id) {
      displayMessage(allConvos[i].conversation);
    }
  }
}
