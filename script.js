document.getElementById("year").textContent =
  new Date().getFullYear();

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
  });
});
