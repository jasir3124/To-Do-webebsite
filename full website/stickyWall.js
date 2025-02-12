let stickyNote1Input1 = document.querySelector(".stickyWallInput1");
let stickyNote1AddBtn1 = document.querySelector(".stickyNoteAddBtn1");
let listArray1 = [];
let list1 = document.querySelector(".listContainer1");

stickyNote1AddBtn1.addEventListener("click", function () {
  let value = stickyNote1Input1.value;

  if (value.trim() === "") {
    document.querySelector(".inputError1").style.visibility = "visible";
    return;
  }

  document.querySelector(".inputError1").style.visibility = "hidden";
  listArray1.push(value);
  let li = document.createElement("li");
  li.setAttribute("class", "listItem");
  list1.appendChild(li);
  li.innerHTML = value;
  li.scrollIntoView({ behavior: "smooth", block: "center" });
  let icon = iconDelete1();
  li.appendChild(icon);
  stickyNote1Input1.value = "";
  localStorage.setItem("stickyNote1", JSON.stringify(listArray1));
});

window.addEventListener("load", function () {
  let storage1 = JSON.parse(localStorage.getItem("stickyNote1"));

  if (storage1) {
    listArray1.push(...storage1);
  }

  listArray1.forEach(function (item) {
    let li = document.createElement("li");
    list1.appendChild(li);
    li.innerText = item;
    let icon = iconDelete1();
    li.appendChild(icon);
    li.setAttribute("class", "listItem");
  });
});

// blue sticky note
let stickyNote1Input2 = document.querySelector(".stickyWallInput2");
let stickyNote1AddBtn2 = document.querySelector(".stickyNoteAddBtn2");
let listArray2 = [];
let list2 = document.querySelector(".listContainer2");

stickyNote1AddBtn2.addEventListener("click", function () {
  let value = stickyNote1Input2.value;

  if (value.trim() === "") {
    document.querySelector(".inputError2").style.visibility = "visible";
    return;
  }

  document.querySelector(".inputError2").style.visibility = "hidden";
  listArray2.push(value);
  let li = document.createElement("li");
  li.setAttribute("class", "listItem");
  list2.appendChild(li);
  li.innerHTML = value;
  let icon = iconDelete2();
  li.appendChild(icon);
  stickyNote1Input2.value = "";
  localStorage.setItem("stickyNote2", JSON.stringify(listArray2));
});

window.addEventListener("load", function () {
  let storage2 = JSON.parse(localStorage.getItem("stickyNote2"));

  if (storage2) {
    listArray2.push(...storage2);
  }

  listArray2.forEach(function (item2) {
    let li = document.createElement("li");
    li.setAttribute("class", "listItem");
    list2.appendChild(li);
    li.innerText = item2;
    let icon = iconDelete2();
    li.appendChild(icon);
  });
});

// red sticky note
let stickyNote1Input3 = document.querySelector(".stickyWallInput3");
let stickyNote1AddBtn3 = document.querySelector(".stickyNoteAddBtn3");
let listArray3 = [];
let list3 = document.querySelector(".listContainer3");

stickyNote1AddBtn3.addEventListener("click", function () {
  let value = stickyNote1Input3.value;
  if (value.trim() === "") {
    document.querySelector(".inputError3").style.visibility = "visible";
    return;
  }

  document.querySelector(".inputError3").style.visibility = "hidden";
  listArray3.push(value);
  let li = document.createElement("li");
  li.setAttribute("class", "listItem");
  list3.appendChild(li);
  li.innerHTML = value;
  let icon = iconDelete3();
  li.appendChild(icon);
  stickyNote1Input3.value = "";
  localStorage.setItem("stickyNote3", JSON.stringify(listArray3));
});

window.addEventListener("load", function () {
  let storage3 = JSON.parse(localStorage.getItem("stickyNote3"));

  if (storage3) {
    listArray3.push(...storage3);
  }

  listArray3.forEach(function (item3) {
    let li = document.createElement("li");
    li.setAttribute("class", "listItem");
    list3.appendChild(li);
    li.innerText = item3;
    let icon = iconDelete3();
    li.appendChild(icon);
  });
});

// shows username
let usernameText = document.querySelector(".username");
let username = JSON.parse(localStorage.getItem("username"));
function showUsername() {
  if (username) {
    usernameText.innerHTML = username;
  } else {
    usernameText.innerHTML = "User";
  }
}
showUsername();

// delete icon
function iconDelete1() {
  let icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-xmark", "iconRight");
  icon.addEventListener("click", function () {
    let li = this.parentNode;
    let index = Array.from(li.parentNode.children).indexOf(li);
    listArray1.splice(index, 1);
    localStorage.setItem("stickyNote1", JSON.stringify(listArray1));
    li.remove();
  });
  return icon;
}

function iconDelete2() {
  let icon2 = document.createElement("i");
  icon2.classList.add("fa-solid", "fa-xmark", "iconRight");
  icon2.addEventListener("click", function () {
    let li = this.parentNode;
    let index = Array.from(li.parentNode.children).indexOf(li);
    listArray2.splice(index, 1);
    localStorage.setItem("stickyNote2", JSON.stringify(listArray2));
    li.remove();
  });
  return icon2;
}

function iconDelete3() {
  let icon3 = document.createElement("i");
  icon3.classList.add("fa-solid", "fa-xmark", "iconRight");
  icon3.addEventListener("click", function () {
    let li = this.parentNode;
    let index = Array.from(li.parentNode.children).indexOf(li);
    listArray3.splice(index, 1);
    localStorage.setItem("stickyNote3", JSON.stringify(listArray3));
    li.remove();
  });
  return icon3;
}



let openNavbarBTn = document.querySelector(".openNavbarTopCollapseBtn");
let navbar = document.querySelector(".navbarTopCollapse");
let closeNavbarBtn = document.querySelector(".closeNavbarTopCollapseBtn");

openNavbarBTn.addEventListener("click", function (e) {
  e.stopPropagation();
  navbar.style.display = "block";
  openNavbarBTn.style.display = "none";
  navbar.classList.add("open");
});

closeNavbarBtn.addEventListener("click", function (e) {
  navbar.style.display = "none";
  openNavbarBTn.style.display = "block";
  navbar.classList.remove("open");
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  let value = navbar.classList.contains("open");
  console.log(value);
  if (!navbar.contains(event.target) && value) {
    navbar.style.display = "none";
    openNavbarBTn.style.display = "block";
  }
});