// get form values
// function getInput(id) {
//   return document.getElementById(id).value;
// }
//
// // listen for formm Submit
// document.getElementById('contact').addEventListener('submit', formSub)
$(document).ready(function () {


$('#contactForm').on('submit', submitform)

function submitform(e)
{
  e.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var message = $('#message').val();
  storeData(name, phone, email, message);
$('#success').text('Message was sent');
$('button').hide();
}

var messageref = firebase.database().ref('messages');
function storeData(name , phone, email, message)
{
  var newMessage = messageref.push();
  newMessage.set({
    name: name,
    phone: phone,
    email: email,
    message: message
  })
}
});

// function formSub(e) {
//   e.preventDefault();
//   // get form input
//   var first_name = getInput('first_name');
//   var last_name = getInput('last_name');
//   var phone = getInput('phone');
//   var email = getInput('email');
//   var message = getInput('message');
//
// // call save message function when submitting
//   saveMessage(first_name, last_name, phone, email, message);
//
//   // form submitted alert
//   document.querySelector('.formAlert').style.display = 'block';
//   document.getElementById('form').style.display = 'none';
//   // alert disappear after 3 secs
//   setTimeout(
//     function() {
//       document.querySelector('.formAlert').style.display= 'none';
//       document.getElementById('form').style.display = 'block';
//       //clear form
//       document.getElementById('form').reset();
//     }, 3000
//   );
//
//
//
// }
//
// var messageref = firebase.database().ref('messages');
//
//
// // save message to firebasejs
// function saveMessage(first_name, last_name, phone, email, message)
// {
//   var newMessage = messageref.push();
//   newMessage.set({
//     first_name: first_name,
//     last_name: last_name,
//     email: email,
//     phone: phone,
//     message: message
//   })
// }
