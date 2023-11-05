
/*----------------------------- Site Loader & Popup --------------------*/
$(window).on("load", function () {
  $("#cv-overlay").fadeOut();
});
$(document).ready(function () {
  "use strict";
  /*----------------------------- Scroll Up Button --------------------- */
  var btn = $('#scrollup');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  /*----------------------------- Scroll Down Button on hero section --------------------- */
  $(".scroll-down").on('click', function (e) {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    },
      'slow');
  });

  /*--------------------- Aos animation on scroll --------------------*/
  AOS.init({
    once: true
  });

  /*--------------------- On click menu scroll section to section -------------------------------- */
  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 50,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.on("click", function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    // alert(href);
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
  /*--------------------- navigation close on click menu item (responsive) -------------------------------- */
  $('.cv-nav').on('click', function () {
    $('.navbar-collapse').removeClass("show");
  });
  /*--------------------- Scroll to fixed navigation bar -------------------------------- */
  $(function () {
    var header = $(".cv-static");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('cv-static').addClass("cv-fixed");
      } else {
        header.removeClass("cv-fixed").addClass('cv-static');
      }
    });
  });

  /*--------------------- portfolio carousel -------------------------------- */
  $('.portfolio-carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    smartSpeed: 1000,
    autoplay: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      991: {
        items: 3
      },
      1199: {
        items: 4
      },
      1499: {
        items: 4
      }
    }
  });
  /*--------------------- News carousel -------------------------------- */
  $('.latest-news').owlCarousel({
    loop: true,
    margin: 24,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      991: {
        items: 3
      }
    }
  });

});