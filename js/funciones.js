jQuery(document).ready(function ($) {
  // ==== Menu responsive ====
  var menuBurger = $("#menu_responsive");
  var menu = $("#menu_principal");
  var itemMenu = $("#menu_principal a");
  var filtro = $(".opacidad-principal");
  var barra1 = $("#menu_responsive span.barra").eq(0);
  var barra2 = $("#menu_responsive span.barra").eq(1);
  var barra3 = $("#menu_responsive span.barra").eq(2);

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

  menuBurger.click(animarMenu);

  function animarMenu() {
    if (menuBurger.hasClass("abrir")) {
      abrirMenu();
    } else if (menuBurger.hasClass("cerrar")) {
      cerrarMenu();
    }
  }

  function abrirMenu() {
    filtro.css({ display: "block" }).animate({ opacity: 1 });
    menu
      .css({
        right: "-100%",
        display: "flex",
      })
      .animate({ right: 0 }, 1000);
    menuBurger.attr("class", "cerrar");
    barra1.addClass("activo").css({
      transform: "rotate(30deg)",
    });
    barra2.css({
      opacity: 0,
    });
    barra3.css({
      transform: "rotate(-30deg)",
    });
  }

  function cerrarMenu() {
    filtro.animate({ opacity: 0 });
    setTimeout(() => {
      filtro.css({ display: "none" });
      menuBurger.attr("class", "abrir");
    }, 1000);
    menu.animate({ right: "-100%" }, 1000);
    setTimeout(() => {
      menu.css({ display: "none" });
    }, 1000);
    barra1.css(
      {
        transform: "rotate(0)",
      },
      500
    );
    barra2.css(
      {
        opacity: 1,
      },
      500
    );
    barra3.css(
      {
        transform: "rotate(0)",
      },
      500
    );
  }

  function myFunction(ventana) {
    if (ventana.matches) {
      // If media query matches
      itemMenu.click(cerrarMenu);
    }
  }

  var ventana = window.matchMedia("(max-width: 700px)");
  myFunction(ventana); // Call listener function at run time
  ventana.addListener(myFunction); // Attach listener function on state changes

  // ==== // Menu responsive ====

  // ==== Back to top ====
  /*         var btnTop = document.createElement('a');
        var body = $('body');
        var topBar = $('#topbar');

        btnTop.className = 'boton-top';
        btnTop.href = '#topbar';
        btnTop.innerHTML = '<i class="fas fa-chevron-up"></i>'

        body.append(btnTop);

        var pantalla = $(window).height();
        var botonTop = $('.boton-top');
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();

            if(scroll > pantalla / 2) {
                botonTop.css({'display': 'flex'});
            } else if(scroll < pantalla / 2){
                botonTop.css({'display': 'none'});
            }
        }); */

  // ==== // Back to top ====

  document.addEventListener("DOMContentLoaded", function () {
    var currentURL = window.location.pathname;
    document
      .querySelectorAll(".aside-menu a[data-section]")
      .forEach(function (link) {
        if (currentURL.includes(link.getAttribute("data-section"))) {
          link.classList.add("text-orange-500");
        }
      });
  });
});
