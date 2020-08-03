"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var siema = new Siema({
  selector: ".card_slider_siema",
  loop: true,
  onChange: function onChange() {
    document.querySelectorAll(".card_slider_button_num").forEach(function (item) {
      if (+item.dataset.btnItem === +siema.currentSlide) {
        document.querySelectorAll(".card_slider_button_num").forEach(function (i) {
          i.classList.remove("card_slider_button_num_active");
        });
        item.classList.add("card_slider_button_num_active");
      }
    });
  }
});
document.querySelector("#slider_left").addEventListener("click", function () {
  siema.prev();
});
document.querySelector("#slider_right").addEventListener("click", function () {
  siema.next();
});
document.querySelectorAll(".card_slider_button_num").forEach(function (item) {
  var dataId = item.dataset.btnItem;
  item.addEventListener("click", function () {
    siema.goTo(dataId);
    document.querySelectorAll(".card_slider_button_num_active").forEach(function (tag) {
      tag.classList.remove("card_slider_button_num_active");
    });
    item.classList.add("card_slider_button_num_active");
  });
}); // == rate

var rateItems = document.querySelectorAll(".card_info_rate");
var rateArray = Array.prototype.slice.call(rateItems);
rateArray.forEach(function (item) {
  return item.addEventListener("click", function () {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
}); // ==== open menu

document.querySelector(".cart_btn").addEventListener("click", function () {
  document.querySelector(".menu_shadow").classList.add("menu_show");
});
document.querySelector(".card_info_btn_cart").addEventListener("click", function () {
  document.querySelector(".menu_shadow").classList.add("menu_show");
});
document.querySelector(".cart_menu_btn").addEventListener("click", function () {
  document.querySelector(".menu_shadow").classList.remove("menu_show");
});
document.querySelector(".menu_shadow").addEventListener("click", function (e) {
  if (e.target.classList.contains("menu_shadow")) {
    document.querySelector(".menu_shadow").classList.remove("menu_show");
  }
}); //====counter

document.querySelectorAll(".card_info_buttons_counter").forEach(function (item) {
  var arr = item.childNodes;

  var _ref = _toConsumableArray(arr),
      up = _ref[1],
      down = _ref[3];

  var input = item.previousElementSibling;
  up.addEventListener("click", function () {
    return input.value++;
  });
  down.addEventListener("click", function () {
    if (input.value <= 0) {
      return;
    } else {
      input.value--;
    }
  });
});