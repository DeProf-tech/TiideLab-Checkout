// const { response } = require("express");

// const spawn = require("nodemon/lib/spawn");

const url = "https://jsonplaceholder.typicode.com/users";

// Getting Users
const fetchUsers = function () {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderUsers(data);
      //   console.log(data);
    });
};

// Step II
const renderUsers = function (usersData) {
  // console.log(usersData);
  const ul = document.getElementById("user-list-container");
  // console.log(ul);

  usersData.forEach((user, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${i + 1}</span>
      <span>${user.name}</span>
      <span>-</span>
      <span class='username'>${user.username}</span>
      `;
    ul.appendChild(li);
  });
};
// console.log(ul);

const searchUsersByUsername = function () {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");
  // console.log(searchedUser);
  // usernameSearch();

  // displayUser();

  // //   // Get Search
  for (let i = 0; i < usersList.length; i++) {
    const usernameSpanTag = usersList[i].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const match = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (match) {
      usersList[i].style.display = "block";
    } else {
      usersList[i].style.display = "none";
    }
  }
};

fetchUsers();
