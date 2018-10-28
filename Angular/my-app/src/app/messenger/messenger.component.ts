import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {


  constructor() {
   }

  ngOnInit() {
    var self = this;
    $('.submitbutton').on("click", function() {
      var input = $('.submitinput').val();
      var userMessage = [{user: "you", message: input.toString()}];
      console.log(userMessage);
      self.displayMessage(userMessage);
      $('.submitinput').val("");
      });

      this.refreshContacts(this.contacts);
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
        self.getConversation(userID);
      });
      console.log("Finish init");
  }

  displayMessage(userMsg) {
    for(var i in userMsg) {
      var row = $('<tr>');
      var table = $('.table');
      row.appendTo(table);
      if(userMsg[i].user === "you") {
        var emptyEntry = $('<td>');
        var messageRow = $('<td class=my>');
        messageRow.append(userMsg[i].message);
        emptyEntry.appendTo(row);
        messageRow.appendTo(row);
      } else {
        var emptyEntry = $('<td>');
        var messageRow = $('<td class="other">');
        messageRow.append(userMsg[i].message);
        emptyEntry.appendTo(row);
        messageRow.appendTo(row);
      }
    }
  }

contacts = [["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jack"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jane"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bobby"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Jim"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "Jonah"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Bill"],
["https://66.media.tumblr.com/4cd0d714428c8624c174506247883497/tumblr_ph9tcrnjlZ1wj3509o1_400.png", "Joe"],
["https://66.media.tumblr.com/f375f8f408b5c78d9aaa26e3f6a5e96a/tumblr_ph9tclI6EE1wj3509o1_400.png", "John"],
["https://66.media.tumblr.com/5ab623f0c7b43c4f5d1dab5c15bd4f3f/tumblr_ph9tcgYlIC1wj3509o1_400.png", "Ben"]];

  refreshContacts(contacts) {
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

  Jack = {usr: "Jack", conversation: [{user: "you", message: "Sup"},
                      {user: "Jack", message: "hi there"}, {user:"you", message: "pizza time"}]};
  Bobby = {usr: "Bobby", conversation: [{user:"bobby", message: "Hey how's it going?"}, {user: "you", message: "Yeah not bad"}]};
  Jane = {usr: "Jane", conversation: [{user:"Jane", message: "You coming to the park today?"}, {user: "you", message: "Yeah!"}]};


  allConvos = [this.Jack, this.Bobby, this.Jane];

  getConversation(id) {
    for(let i of this.allConvos) {
      if(i.usr === id) {
        this.displayMessage(i.conversation);
      }
    }
  }
}
