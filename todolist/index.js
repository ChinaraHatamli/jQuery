// $(document).ready(function(){
// $("#add").click(function(){
// const inputName = $("#input").val();
// const listItem = $(`<li>${inputName} <button class="delete">Delete</button> <button class="edit">Edit</button></li>`);
//     $("#todos").append(listItem);
//  });

//   $(document).on('click', '.delete', function () {
//     $(this).parent().remove();
//  });

//   $(document).on('click', '.edit', function () {
//    const listItem = $(this).parent();
// const newText = prompt("Enter the edit text:");
//  if (newText !== null) {
//      listItem.contents().first().replaceWith(newText);
//      }

// });
// });



$(document).ready(function () {
  $("#add").click(function () {
    const inputName = $("#input").val();
    const li = document.createElement("li");
    li.textContent = inputName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    $("#todos").append(li);

    $(editBtn).click(function () {
      let editInput = prompt("Edit your todo", li.textContent);
      li.textContent = editInput;
    });

    $(deleteBtn).click(function () {
      li.remove();
    });
  });
});
