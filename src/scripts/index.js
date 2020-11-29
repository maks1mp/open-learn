import "../styles/index.scss";
import "../scripts/shape-outside.js";

function addClass(ele, cls) {
  if (ele.classList) {
    ele.classList.add(cls);
  } else if (!hasClass(ele, cls)) {
    ele.setAttribute("class", ele.getAttribute("class") + " " + cls);
  }
}

function removeClass(ele, cls) {
  if (ele.classList) {
    ele.classList.remove(cls);
  } else if (hasClass(ele, cls)) {
    ele.setAttribute("class", ele.getAttribute("class").replace(cls, " "));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  objectFitImages(); // IE & Edge 12-15 don't support object-fit

  window.ShapesPolyfill.run(); // run polyfills IE

  var open = document.getElementById("open-menu");
  var close = document.getElementById("close-menu");
  var backdrop = document.getElementById("backdrop");

  var menu = document.getElementById("menu");

  function closeMenu() {
    removeClass(menu, "open");
    window.document.body.removeAttribute("style");
  }

  function openMenu() {
    addClass(menu, "open");
    window.document.body.setAttribute("style", "overflow: hidden");    
  }

  open.onclick = openMenu;
  backdrop.onclick = closeMenu;
  close.onclick = closeMenu;

  var elements = menu.querySelectorAll("a");

  for (var i = 0; i < elements.length; i++) {
    (function (element) {
      element.addEventListener("click", closeMenu);
    })(elements[i]);
  }
});