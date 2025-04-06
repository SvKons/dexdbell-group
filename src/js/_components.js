console.log("components2222");

import { moveImg } from "./functions/moveImg";
import { tabs } from "./functions/tabs";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".tabs")) {
        tabs();
    }

    if (document.querySelector(".concerts")) {
        moveImg();
    }
});
