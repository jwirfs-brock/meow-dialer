$(document).ready(function() {  // do when document is loaded
    $("#dialer-content").show(); // show the dialer-content as the default state
    $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
    $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
});

$("#dialer").click(function() { // when the "dialer" button is clicked
  $("#dialer-content").show(); // show the "dialer-content"
  $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
  $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
});

$("#contact-list").click(function() { // when the "contact-list" button is clicked
  $("#dialer-content").hide(); // hide the "dialer-content"
  $("#contact-list-content").show(); // show the contact-list-content in the starting state
  $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
});

$("#add-contact").click(function() { // when the "add-contact" button is clicked
  $("#dialer-content").hide(); // hide the "dialer-content"
  $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
  $("#add-contact-content").show(); // show the add-contact-content in the starting state
});
