(function () {
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
  var btn = document.querySelector(".menu"),
    nav = document.querySelector("nav");
  if (btn)
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var fs = document.querySelectorAll(".filters button"),
    cards = document.querySelectorAll(".card[data-cat]");
  fs.forEach(function (b) {
    b.addEventListener("click", function () {
      fs.forEach(function (x) {
        x.classList.remove("on");
      });
      b.classList.add("on");
      var c = b.dataset.filter;
      cards.forEach(function (k) {
        k.classList.toggle("hide", c !== "all" && k.dataset.cat !== c);
      });
    });
  });
})();
