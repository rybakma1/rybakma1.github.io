"use strict";var e=document.querySelector(".mobile-menu_open-js"),s=document.querySelector(".mobile-menu_close-js"),n=document.querySelector(".mobile-menu_js"),o=document.querySelector(".mobile-menu");e.addEventListener("click",function(){n.classList.add("mobile-menu__open"),e.classList.add("display-none"),s.classList.remove("display-none"),o.classList.add("mobile-menu__background"),o.classList.remove("display-none")}),s.addEventListener("click",function(){n.classList.remove("mobile-menu__open"),s.classList.add("display-none"),e.classList.remove("display-none"),o.classList.remove("mobile-menu__background"),o.classList.add("display-none")});