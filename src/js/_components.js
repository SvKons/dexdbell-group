import { moveImg } from "./functions/moveImg";
import { tabs } from "./functions/tabs";
import { scrollArrow } from "./functions/scroll-arrow";

document.addEventListener("DOMContentLoaded", () => {
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
