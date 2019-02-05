const IEFE = (() => {
  const users = [
    "sanzok",
    "sabin",
    "subash",
    "sakar",
    "dipesh",
    "dinesh",
    "rupesh",
    "kiran"
  ];

  ul = document.getElementById("users-list");

  const renderLists = lists => {
    let li = "";
    for (name in lists) {
      li += "<li>" + lists[name] + "</li>";
    }
    ul.innerHTML = li;
  };

  renderLists(users);

  //Filtering the list

  let input = document.getElementById("filter_users");

  const filterUsers = event => {
    keyword = input.value.toLowerCase();
    filteredUsers = users.filter(user => {
      user = user.toLowerCase();
      return user.indexOf(keyword) > -1;
    });

    renderLists(filteredUsers);
  };

  input.addEventListener('keyup', filterUsers);

})();
