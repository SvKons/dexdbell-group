"use strict";

export function scrollArrow() {
    console.log("scrollArrow: функция запущена");

    const scrollToTopButton = document.querySelector(".scroll-to-top");

    if (!scrollToTopButton) {
        console.warn("scrollArrow: элемент .scroll-to-top не найден");
        return;
    }

    console.log("scrollArrow: элемент .scroll-to-top найден");

    window.addEventListener("scroll", () => {
        console.log("scrollArrow: scrollY =", window.scrollY);

        if (window.scrollY > 100) {
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });

    scrollToTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("scrollArrow: клик по стрелке, скроллим наверх");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
