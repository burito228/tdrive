// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest("[data-parent]")) {
      const subMenuId = targetElement.dataset.parent;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         const activeLink = document.querySelector("._sub-menu-active");
         const activeBlock = document.querySelector("._sub-menu-open");

         if (activeLink && activeLink !== targetElement) {
            activeLink.classList.remove("_sub-menu-active");
         }
         if (activeBlock && activeBlock !== subMenu) {
            activeBlock.classList.remove("_sub-menu-open");
         }

         targetElement.classList.toggle("_sub-menu-active");
         subMenu.classList.toggle("_sub-menu-open");
         document.documentElement.classList.toggle(
            "sub-menu-open",
            subMenu.classList.contains("_sub-menu-open")
         );
      } else {
         console.log("Ой ой, немає такого підменю :(");
      }
      e.preventDefault();
   }
   if (targetElement.closest(".overlay")) {
      // Обробка натискання на блок .overlay
      // Закриваємо всі відкриті меню
      document
         .querySelectorAll("._sub-menu-active")
         .forEach((el) => el.classList.remove("_sub-menu-active"));
      document
         .querySelectorAll("._sub-menu-open")
         .forEach((el) => el.classList.remove("_sub-menu-open"));
      document.documentElement.classList.remove("sub-menu-open");
   }
   if (targetElement.closest(".menu-top-header__link_catalog")) {
      document.documentElement.classList.add("catalog-open");
      e.preventDefault();
   }
   if (targetElement.closest(".menu-catalog__back")) {
      document.documentElement.classList.remove("catalog-open");
      document
         .querySelectorAll("._sub-menu-active")
         .forEach((el) => el.classList.remove("_sub-menu-active"));
      document
         .querySelectorAll("._sub-menu-open")
         .forEach((el) => el.classList.remove("_sub-menu-open"));
      e.preventDefault();
   }
   if (targetElement.closest(".sub-menu-catalog__back")) {
      const openBlocks = document.querySelectorAll("._sub-menu-open, .open");
      if (openBlocks.length) {
         const lastOpenBlock = openBlocks[openBlocks.length - 1];
         lastOpenBlock.classList.remove("_sub-menu-open");
         lastOpenBlock.classList.remove("open");

         const activeLinks = document.querySelectorAll("._sub-menu-active");
         if (activeLinks.length) {
            const lastActiveLink = activeLinks[activeLinks.length - 1];
            lastActiveLink.classList.remove("_sub-menu-active");
         }
         if (
            !document.querySelector("._sub-menu-open") &&
            !document.querySelector(".open")
         ) {
            document.documentElement.classList.remove("sub-menu-open");
         }
      }
      e.preventDefault();
   }
}

const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
if (menuBlocks.length) {
   menuBlocks.forEach((menuBlock) => {
      const menuBlockItems = menuBlock.querySelectorAll(
         ".sub-menu-catalog__category"
      ).length;
      menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
   });
}

document.querySelectorAll(".sub-menu-catalog__item > a").forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      const parentLi = this.parentElement;
      parentLi.classList.toggle("open");
   });
});

document.querySelectorAll(".sub-menu-catalog__item ul a").forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      const parentLi = this.parentElement.parentElement;
      parentLi.classList.toggle("open");
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const headerPhoneLink = document.querySelector(".header-main__phone");
   const preheader = document.querySelector(".preheader");
   const originalContainer = document.querySelector(".header-main");

   const preheaderAuth = document.querySelector(".preheader-auth");
   const headerMainPhone = document.querySelector(".header-main");
   const originalAuthContainer = document.querySelector(".preheader");

   function moveElements() {
      if (document.documentElement.classList.contains("sub-menu-open")) {
         preheader.appendChild(headerPhoneLink);
         headerMainPhone.appendChild(preheaderAuth);
      } else {
         originalContainer.appendChild(headerPhoneLink);
         originalAuthContainer.appendChild(preheaderAuth);
      }
   }

   const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
         if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
         ) {
            moveElements();
         }
      });
   });

   observer.observe(document.documentElement, {
      attributes: true,
   });

   window.addEventListener("resize", function () {
      if (window.innerWidth <= 992) {
         originalContainer.appendChild(headerPhoneLink);
         originalAuthContainer.appendChild(preheaderAuth);
      } else {
         moveElements();
      }
   });

   // Initial check
   if (window.innerWidth <= 992) {
      originalContainer.appendChild(headerPhoneLink);
      originalAuthContainer.appendChild(preheaderAuth);
   } else {
      moveElements();
   }
});

document.querySelectorAll(".catalog-sidebar__title").forEach((title) => {
   title.addEventListener("click", function () {
      this.nextElementSibling.classList.add("active");
      document.querySelector(".overlay").classList.add("active");
      document.documentElement.classList.add("lock");
   });
});

document
   .querySelectorAll(".catalog-sidebar-category__close")
   .forEach((closeBtn) => {
      closeBtn.addEventListener("click", function () {
         document
            .querySelectorAll(".catalog-sidebar-category.active")
            .forEach((activeCategory) => {
               activeCategory.classList.remove("active");
            });
         document.querySelector(".overlay").classList.remove("active");
         document.documentElement.classList.remove("lock");
      });
   });
document.querySelector(".overlay").addEventListener("click", function () {
   this.classList.remove("active");
   document
      .querySelectorAll(".catalog-sidebar-category.active")
      .forEach((activeCategory) => {
         activeCategory.classList.remove("active");
      });
});
