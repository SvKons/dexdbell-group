import { moveImg } from "./functions/moveImg";
import { tabs } from "./functions/tabs";
import { scrollArrow } from "./functions/scroll-arrow";
import { nav } from "./functions/nav";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".burger")) {
        nav();
    }

    if (document.querySelector(".tabs")) {
        tabs();
    }

    if (document.querySelector(".scroll-to-top")) {
        scrollArrow();
    }

    if (document.querySelector(".concerts")) {
        moveImg();
    }
});
