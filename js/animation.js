$(document).ready(function(){
  // desktop-menu event handler
  var isActivePage = false;
  var activePage = "";
  // about-menu event handler
  $(".about-menu").hover(function(){
      $(".main-view").css({
        "transform": "perspective(2000px) rotateY(-1deg)",
        "transform-origin": "right center 0px"
      })
  }, hoverOut);
  $(".about-menu").click(function(){
    $(".desktop-menu").css("display", "none");
    $(".music-toggle").css("display", "none");
    $(".about-head > *").css({"display": "none"});
    $(".about-body *").css({"display": "none"});
    $(".main-view > *").delay(400).animate({"left": "40%","opacity": "0.0"}, 500, function() {
      $(".about-head > *").css({"display": "block"});
      $(".about-body *").css({"display": "block"});
      $(".about-body a").css({"display": "inline-block"});
    });
    $(".main-view").css({
      "transition": "1s ease",
      "transform": "perspective(2000px) rotateY(-50deg)",
      "transform-origin": "right center 0px"
    });
    $(".about-page").css({"display": "block"});
    $(".close-section-btn").css({"display": "block", "top": "8%", "left": "4%"});
    isActivePage = true;
    activePage = ".about-page";
  });

  // project-menu event handler
  $(".project-menu").hover(function(){
      $(".main-view").css({
        "transform": "perspective(2000px) rotateY(1deg)",
        "transform-origin": "left center 0px"
      })
  }, hoverOut);
  $(".project-menu").click(function(){
    $(".desktop-menu").css("display", "none");
    $(".music-toggle").css("display", "none");
    $(".project-head > *").css({"display": "none"});
    $(".project-body *").css({"display": "none"});
    $(".main-view > *").delay(400).animate({"left": "-40%","opacity": "0.0"}, 500, function() {
      $(".project-head > *").css({"display": "block"});
      $(".project-body *").css({"display": "block"});
      // $(".project-body a").css({"display": "inline-block"});
    });
    $(".main-view").css({
      "transition": "1s ease",
      "transform": "perspective(2000px) rotateY(50deg)",
      "transform-origin": "left center 0px"
    });
    $(".project-page").css({"display": "block"});
    $(".close-section-btn").css({"display": "block", "top": "8%", "left": "92%"});
    isActivePage = true;
    activePage = ".project-page";
  });

  // contact-menu event handler
  $(".contact-menu").hover(function(){
      $(".main-view").css({
        "transform": "perspective(2000px) rotateX(-1deg)",
        "transform-origin": "center top 0px"
      })
  }, hoverOut);
  $(".contact-menu").click(function(){
    $(".desktop-menu").css("display", "none");
    $(".music-toggle").css("display", "none");
    $(".contact-head > *").css({"display": "none"});
    $(".contact-body *").css({"display": "none"});
    $(".main-view > *").delay(400).animate({"top": "20%","opacity": "0.0"}, 500, function() {
      $(".contact-head > *").css({"display": "block"});
      $(".contact-body *").css({"display": "block"});
      // $(".project-body a").css({"display": "inline-block"});
    });
    $(".main-view").css({
      "transition": "1s ease",
      "transform": "perspective(2000px) rotateX(-50deg)",
      "transform-origin": "center top 0px"
    });
    $(".contact-page").css({"display": "block"});
    $(".close-section-btn").css({"display": "block", "top": "86%", "left": "92%"});
    isActivePage = true;
    activePage = ".contact-page";
  });

  // hover out function is same for every menu-item
  function hoverOut() {
    if (!isActivePage) {
      $(".main-view").css({
        "transform": "perspective(0) rotateY(0)"
      });
    }
  }

  // close section function is same for every section
  $(".section-head").click(closeSection);
  $(".close-section-btn").click(closeSection);
  function closeSection() {
    if (!mobileViewActive) {
      if (activePage != ".contact-page") {
        $(".main-view > *").css({"display": "block", "opacity": "0.0"}).delay(400).animate({"left": "0","opacity": "1"}, 1000, function() {
          $(".desktop-menu").css("display", "block");
          $(".music-toggle").css("display", "block");
        });
      } else {
        $(".main-view .logo").css({"display": "block" ,"opacity": "0.0"}).delay(400).animate({"top": "40%", "left": "0","opacity": "1"}, 1000);
        $(".main-view .headline").css({"display": "block" ,"opacity": "0.0"}).delay(400).animate({"top": "55%", "left": "0","opacity": "1"}, 1000, function() {
          $(".desktop-menu").css("display", "block");
          $(".music-toggle").css("display", "block");
        });
      }
      $(".main-view").css({
        "transition": "1s ease",
        "transform": "perspective(0) rotateY(0)"
      });
      $(".section").css({"display": "none"});
      $(".section-head > *").css("display", "none");
      $(".close-section-btn").css({"display": "none"});
      isActivePage = false;
    }
  }

  // mobile-menu event handler
  var menuBtnClicked = false;
  var isMenuBtn = "";

  // menu-btn event handler
  $(".menu-btn").click(function() {
    if (!menuBtnClicked) {
      if (isActivePage) {
        $(".mobile-menu").css({"background-color": "#000000"});
        $("."+isMenuBtn).css({"color": "#ffffff"});
        $(".menu-btn, .home-menu").hover(function() {$(this).css("color", "#ffffff");isMenuBtn = $(this).attr("class");}, function() {$(this).css("color", "#888888")});
      }
      $(".mobile-menu").css({"height": "100%"});
      $(".main-view > *").css("display", "none");
      $(".menu-head .langue-menu").css("display", "none");
      $(".menu-body").css("display", "block");
      $(".home-menu").css("display", "block");
      $(".menu-btn span:first-child").css({
        "transition": "0.8s",
        "transform": "matrix3d(0.71,-0.71,0.00,0,0.71,0.71,0.00,0,0,0,1,0,-3,7,0,1)"
      });
      $(".menu-btn span:nth-child(2)").css({
        "visibility": "hidden"
      });
      $(".menu-btn span:last-child").css({
        "transition": "0.8s",
        "transform": "matrix3d(0.71,0.71,0.00,0,-0.71,0.71,0.00,0,0,0,1,0,2,-10,0,1)"
      });
      $(".mobile-about-menu").css({"left": "100%"}).animate({"left": "-5%"}, 800).animate({"left": "0"});
      $(".mobile-project-menu").css({"right": "100%"}).delay(200).animate({"right": "-5%"}, 800).animate({"right": "0"});
      $(".mobile-contact-menu").css({"left": "100%"}).delay(400).animate({"left": "-5%"}, 800).animate({"left": "0"});
      menuBtnClicked = true;
    } else {
      $(".mobile-about-menu").animate({"left": "-5%"}, 800).animate({"left": "100%"});
      $(".mobile-project-menu").delay(200).animate({"right": "-5%"}, 800).animate({"right": "100%"});
      $(".mobile-contact-menu").delay(400).animate({"left": "-5%"}, 800).animate({"left": "100%"}, function() {
        if (isActivePage) {
          $(".mobile-menu").css({"background-color": "rgba(256, 256, 256, 0)"});
          $("."+isMenuBtn).css({"color": "#000000"});
          $(".menu-head .langue-menu").css("display", "none");
          $(".home-menu").css("display", "block");
        } else {
          $(".menu-head .langue-menu").css("display", "block");
          $(".home-menu").css("display", "none");
        }
        $(".mobile-menu").css({"height": "80px"});
        $(".main-view > *").css("display", "block");
        $(".menu-body").css("display", "none");
        menuBtnCloseAnimation();
      });
      if (isActivePage) {
        $(".menu-btn, .home-menu").hover(function() {$(this).css("color", "#000000");isMenuBtn = $(this).attr("class");}, function() {$(this).css("color", "#888888")});
      }
      menuBtnClicked = false;
    }
  });

  // home-menu event handler
  $(".home-menu").click(function() {
    if (menuBtnClicked) {
      $(".mobile-about-menu").animate({"left": "-5%"}, 800).animate({"left": "100%"});
      $(".mobile-project-menu").delay(200).animate({"right": "-5%"}, 800).animate({"right": "100%"});
      $(".mobile-contact-menu").delay(400).animate({"left": "-5%"}, 800).animate({"left": "100%"}, function() {
        $(".section").css({"display": "none"});
        $(".main-view").css({
          "display": "block",
          "transform": "perspective(0) rotateY(0)"
        });
        $(".menu-head .langue-menu").css("display", "block");
        $(".home-menu").css("display", "none");
        $(".mobile-menu").css({"height": "80px"});
        $(".main-view > *").css({"display": "block", "left": "0", "opacity": "1", "color": "#ffffff"});
        $(".main-view .logo").css({"top": "40%"});
        $(".main-view .headline").css({"top": "55%"});
        $(".menu-body").css("display", "none");
        menuBtnCloseAnimation();
      });
    } else if (!menuBtnClicked || isActivePage) {
      $(".section").css({"display": "none"});
      $(".main-view").css({
        "display": "block",
        "transform": "perspective(0) rotateY(0)"
      });
      $(".menu-head .langue-menu").css("display", "block");
      $(".home-menu").css("display", "none");
      $(".mobile-menu").css({"height": "80px"});
      $(".main-view > *").css({"display": "block", "left": "0", "opacity": "1", "color": "#ffffff"});
      $(".main-view .logo").css({"top": "40%"});
      $(".main-view .headline").css({"top": "55%"});
      $(".menu-body").css("display", "none");
    }
    $(".menu-btn, .home-menu").hover(function() {$(this).css("color", "#ffffff");isMenuBtn = $(this).attr("class");}, function() {$(this).css("color", "#888888")});
    menuBtnClicked = false;
    isActivePage = false;
  });

  // mobile-about-menu handler
  $(".mobile-about-menu").click(function() {
    if (isActivePage) {
      $(activePage).css({"display": "none"});
    }
    $(".mobile-about-menu").animate({"left": "-5%"}, 800).animate({"left": "100%"});
    $(".mobile-project-menu").delay(200).animate({"right": "-5%"}, 800).animate({"right": "100%"});
    $(".mobile-contact-menu").delay(400).animate({"left": "-5%"}, 800).animate({"left": "100%"}, function() {
      $(".about-page").css({"display": "block"});
      $(".menu-body").css({"display": "none"});
      $(".mobile-menu").css({"height": "80px"});
      $(".mobile-menu").css({"background-color": "rgba(256, 256, 256, 0)"});
      menuBtnCloseAnimation();
      isActivePage = true;
      activePage = ".about-page";
      menuBtnClicked = false;
      $(window).resize();
    });
    $(".section-head > *").css("display", "block");
    $(".close-section-btn").css({"display": "none", "top": "8%", "left": "4%"});
  });

  // mobile-project-menu handler
  $(".mobile-project-menu").click(function() {
    if (isActivePage) {
      $(activePage).css({"display": "none"});
    }
    $(".mobile-about-menu").animate({"left": "-5%"}, 800).animate({"left": "100%"});
    $(".mobile-project-menu").delay(200).animate({"right": "-5%"}, 800).animate({"right": "100%"});
    $(".mobile-contact-menu").delay(400).animate({"left": "-5%"}, 800).animate({"left": "100%"}, function() {
      $(".project-page").css({"display": "block"});
      $(".menu-body").css({"display": "none"});
      $(".mobile-menu").css({"height": "80px"});
      $(".mobile-menu").css({"background-color": "rgba(256, 256, 256, 0)"});
      menuBtnCloseAnimation();
      isActivePage = true;
      activePage = ".project-page";
      menuBtnClicked = false;
      $(window).resize();
    });
    $(".section-head > *").css("display", "block");
    $(".close-section-btn").css({"display": "none", "top": "8%", "left": "92%"});
  });

  // mobile-contact-menu handler
  $(".mobile-contact-menu").click(function() {
    if (isActivePage) {
      $(activePage).css({"display": "none"});
    }
    $(".mobile-about-menu").animate({"left": "-5%"}, 800).animate({"left": "100%"});
    $(".mobile-project-menu").delay(200).animate({"right": "-5%"}, 800).animate({"right": "100%"});
    $(".mobile-contact-menu").delay(400).animate({"left": "-5%"}, 800).animate({"left": "100%"}, function() {
      $(".contact-page").css({"display": "block"});
      $(".menu-body").css({"display": "none"});
      $(".mobile-menu").css({"height": "80px"});
      $(".mobile-menu").css({"background-color": "rgba(256, 256, 256, 0)"});
      menuBtnCloseAnimation();
      isActivePage = true;
      activePage = ".contact-page";
      menuBtnClicked = false;
      $(window).resize();
    });
    $(".section-head > *").css("display", "block");
    $(".close-section-btn").css({"display": "none", "top": "86%", "left": "92%"});
  });

  // menu-btn close animation
  function menuBtnCloseAnimation() {
    $(".menu-btn span:first-child").css({
      "transition": "0.8s",
      "transform": "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
    });
    $(".menu-btn span:nth-child(2)").css({
      "visibility": "visible",
      "left": "100%"
    }).animate({
      "left": "0"
    }, 800, function() {
      $(".menu-btn span:first-child, .menu-btn span:last-child").css({
        "transition": "0s"
      });
    });
    $(".menu-btn span:last-child").css({
      "transition": "0.8s",
      "transform": "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
    });
  }

  // window-resize function is to be called whenever the window is resized
  var mobileViewActive = false;
  var windowWidth = $(window).outerWidth();

  // check the initial state of the view
  if (windowWidth <= 800) {
    mobileViewActive = true;
    $(".section-head").css({"cursor": "auto"});
  } else {
    mobileViewActive = false;
    $(".section-head").css({"cursor": "pointer"});
  }

  // make responsive page checking width of the window
  $(window).resize(function(){
    windowWidth = $(window).outerWidth();
    if (windowWidth <= 800) {
      mobileViewActive = true;
      $(".desktop-menu").css("display", "none");
      $(".music-toggle").css("display", "none");
      $(".header").css("color", "#000000");
      $(".header-caption").css("color", "#000000");
      $(".desktop-menu").css("display", "none");
      $(".music-toggle").css("display", "none");
    } else {
      mobileViewActive = false;
      $(".desktop-menu").css("display", "block");
      $(".music-toggle").css("display", "block");
      $(".header").css("color", "#ffffff");
      $(".header-caption").css("color", "#ffffff");
      $(".desktop-menu").css("display", "block");
      $(".music-toggle").css("display", "block");
    }
    if (mobileViewActive && isActivePage) {
      $(".main-view").css("display", "none");
      $(".close-section-btn").css({"display": "none"});
      $(".header-caption").css("color", "#ffffff");
      $(".menu-head .langue-menu").css("display", "none");
      $(".home-menu").css("display", "block");
      $(".section-head").css({"cursor": "auto"});
      $(".mobile-menu").css({"background-color": "rgba(256, 256, 256, 0)"});
      $(".menu-btn, .home-menu").hover(function() {$(this).css("color", "#000000");isMenuBtn = $(this).attr("class");}, function() {$(this).css("color", "#888888")});
    } else if (!mobileViewActive && isActivePage) {
      if (activePage == ".about-page") {
        $(".main-view").css({
          "display": "block",
          "transform": "perspective(2000px) rotateY(-50deg)",
          "transform-origin": "right center 0px"
        });
        $(".close-section-btn").css({"display": "block", "top": "8%", "left": "4%"});
      } else if (activePage == ".project-page") {
        $(".main-view").css({
          "display": "block",
          "transform": "perspective(2000px) rotateY(50deg)",
          "transform-origin": "left center 0px"
        });
        $(".close-section-btn").css({"display": "block", "top": "8%", "left": "92%"});
      } else if (activePage == ".contact-page") {
        $(".main-view").css({
          "display": "block",
          "transform": "perspective(2000px) rotateX(-50deg)",
          "transform-origin": "center top 0px"
        });
        $(".close-section-btn").css({"display": "block", "top": "86%", "left": "92%"});
      }
      $(".main-view > *").css({"display": "none"});
      $(".header-caption").css("color", "#ffffff");
      $(".menu-head .langue-menu").css("display", "block");
      $(".home-menu").css("display", "none");
      $(".desktop-menu").css("display", "none");
      $(".music-toggle").css("display", "none");
      $(".section-head").css({"cursor": "pointer"});
      $(".menu-btn, .home-menu").hover(function() {$(this).css("color", "#ffffff");isMenuBtn = $(this).attr("class");}, function() {$(this).css("color", "#888888")});
    }
  });
});
