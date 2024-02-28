// $(document).ready(function() {
//   $("#submit-btn").click(function() {
//       var firstName = $("#first-name").val();
//       var lastName = $("#last-name").val();
//       var age = $("#age").val();

//       var userInfo = "First Name: " + firstName + "<br>" +
//                      "Last Name: " + lastName + "<br>" +
//                      "Age: " + age;

//       $("#user-info").html(userInfo);
//   });
// });



// $(document).ready(function () {
//   $("#add").click(function () {
//     const inputName = $("#input").val();
//     const listItem = $(`<li>${inputName} <button class="delete">Delete</button> <button class="edit">Edit</button></li>`);
//     $("#todos").append(listItem);
//   });

//   $(document).on('click', '.delete', function () {
//     $(this).parent().remove();
//   });

//   $(document).on('click', '.edit', function () {
//     const listItem = $(this).parent();
//     const newText = prompt("Enter the edit text:");
//     if (newText !== null) {
//       listItem.contents().first().replaceWith(newText);
//     }
//   });
// });




