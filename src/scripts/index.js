import "../styles/index.scss";
import "../scripts/shape-outside.js";
import MicroModal from "micromodal";
import {handleContactForm, handleRegisterForm} from '../scripts/form-handler';

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

function hasClass(ele, cls) {
  return ele.getAttribute('class').indexOf(cls) > -1;
}

function bindModal() {
  var elements = document.getElementsByClassName('open-modal');

  for (var i = 0; i < elements.length; i++) {
    (function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();

        MicroModal.show('registration-modal');
      })
    })(elements[i]);
  }
}


document.addEventListener("DOMContentLoaded", () => {
    objectFitImages(); // IE & Edge 12-15 don't support object-fit

    window.ShapesPolyfill.run(); // run polyfills IE

    bindModal();

    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      handleContactForm(this, function() {
        alert('Submission successful!');
      }, function() {
        alert('Error, try again later!');
      });
    });

    document.getElementById('register-form').addEventListener('submit', function(e) {
      e.preventDefault();
      handleRegisterForm(this, function() {
        MicroModal.close('registration-modal');
        alert('Submission successful!');
      }, function() {
        MicroModal.close('registration-modal');
        alert('Error, try again later!');
      });
    });

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
