jQuery(document).ready(function ($) {
  $(document).click(function (event) {
    if (!$(event.target).closest("#serviciosToggle, #submenu").length) {
      $("#submenu").addClass("hidden");
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#serviciosToggle, #submenu").length) {
      $("#submenu").addClass("hidden");
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#serviciosToggle, #submenu").length) {
      $("#submenu").addClass("hidden");
    }
  });

  // Abrir/Cerrar el menú hamburguesa
  $("#mobile-menu-toggle").on("click", function () {
    $(this).toggleClass("is-active");
    $("#mobile-nav").toggleClass("show hidden");
  });

  // Mostrar/Ocultar submenú
  $("#submenu-toggle").on("click", function () {
    $("#submenu").toggleClass("open").slideToggle(300);
  });

  // Cerrar el menú al hacer clic en cualquier enlace
  $("#mobile-nav a").on("click", function () {
    $("#mobile-menu-toggle").removeClass("is-active");
    $("#mobile-nav").removeClass("show").addClass("hidden");
  });

  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  $(".aside-menu a[data-section]").each(function () {
    const section = $(this).data("section");
    if (currentPage === section) {
      $(this).addClass("title");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const currentURL = window.location.pathname;
    document
      .querySelectorAll(".aside-menu a[data-section]")
      .forEach(function (link) {
        if (currentURL.includes(link.getAttribute("data-section"))) {
          link.classList.add("text-orange-500");
        }
      });
  });

  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
