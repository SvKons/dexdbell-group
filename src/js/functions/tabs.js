"use strict";

export function tabs() {
    const buttons = document.querySelectorAll(".tabs__button");
    const panels = document.querySelectorAll(".tabs__panel");

    if (buttons.length === 0 || panels.length === 0) {
        console.warn("Tabs: элементы не найдены");
        return;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) =>
                btn.classList.remove("tabs__button_active")
            );
            button.classList.add("tabs__button_active");

            panels.forEach((panel) =>
                panel.classList.remove("tabs__panel_active")
            );

            const targetPanel = document.getElementById(button.dataset.tab);

            if (targetPanel) {
                targetPanel.classList.add("tabs__panel_active");
            } else {
                console.error(`Панель с id="${button.dataset.tab}" не найдена`);
            }
        });
    });
}
