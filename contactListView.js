var contacts = [["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jack"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jane"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bobby"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jack"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jane"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bobby"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jack"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jane"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bobby"]];

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
    var elem = document.createElement("li");
    img.appendTo(elem);
    name.appendTo(elem);
    contactAvatars.append(elem);
  }
}
