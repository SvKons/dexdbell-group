"use strict";

export function moveImg() {
    const decor = document.querySelector(".concerts__decor");
    const concerts = document.querySelector(".concerts");

    concerts.addEventListener("mousemove", (e) => {
        const rect = concerts.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x / 20;
        const moveY = y / 30;

        decor.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}
