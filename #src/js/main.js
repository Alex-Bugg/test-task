const siema = new Siema({
  selector: ".card_slider_siema",
  loop: true,
  onChange: () => {
    document.querySelectorAll(".card_slider_button_num").forEach((item) => {
      if (+item.dataset.btnItem === +siema.currentSlide) {
        document.querySelectorAll(".card_slider_button_num").forEach((i) => {
          i.classList.remove("card_slider_button_num_active");
        });
        item.classList.add("card_slider_button_num_active");
      }
    });
  },
});

document.querySelector("#slider_left").addEventListener("click", () => {
  siema.prev();
});
document.querySelector("#slider_right").addEventListener("click", () => {
  siema.next();
});

document.querySelectorAll(".card_slider_button_num").forEach((item) => {
  let dataId = item.dataset.btnItem;
  item.addEventListener("click", () => {
    siema.goTo(dataId);
    document
      .querySelectorAll(".card_slider_button_num_active")
      .forEach((tag) => {
        tag.classList.remove("card_slider_button_num_active");
      });
    item.classList.add("card_slider_button_num_active");
  });
});
// == rate
const rateItems = document.querySelectorAll(".card_info_rate");
const rateArray = Array.prototype.slice.call(rateItems);
rateArray.forEach((item) =>
  item.addEventListener("click", () => {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  })
);
// ==== open menu

document.querySelector(".cart_btn").addEventListener("click", () => {
  document.querySelector(".menu_shadow").classList.add("menu_show");
});

document.querySelector(".card_info_btn_cart").addEventListener("click", () => {
  document.querySelector(".menu_shadow").classList.add("menu_show");
});

document.querySelector(".cart_menu_btn").addEventListener("click", () => {
  document.querySelector(".menu_shadow").classList.remove("menu_show");
});

document.querySelector(".menu_shadow").addEventListener("click", (e) => {
  if (e.target.classList.contains("menu_shadow")) {
    document.querySelector(".menu_shadow").classList.remove("menu_show");
  }
});

//====counter
document.querySelectorAll(".card_info_buttons_counter").forEach((item) => {
  let arr = item.childNodes;
  let [, up, , down] = [...arr];
  let input = item.previousElementSibling;
  up.addEventListener("click", () => input.value++);
  down.addEventListener("click", () => {
    if (input.value <= 0) {
      return;
    } else {
      input.value--;
    }
  });
});
