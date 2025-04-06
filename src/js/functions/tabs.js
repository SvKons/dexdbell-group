"use strict";

export function tabs() {
    const buttons = document.querySelectorAll(".tabs__button");
    const panels = document.querySelectorAll(".tabs__panel");

    console.log("Tabs: инициализация...");
    console.log("Найдено кнопок:", buttons.length);
    console.log("Найдено панелей:", panels.length);

    if (buttons.length === 0 || panels.length === 0) {
        console.warn("Tabs: элементы не найдены");
        return;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(`Клик по кнопке: ${button.textContent.trim()}`);
            console.log(`data-tab: ${button.dataset.tab}`);

            // Убираем активный класс со всех кнопок
            buttons.forEach((btn) =>
                btn.classList.remove("tabs__button_active")
            );
            // Добавляем активный класс к нажатой кнопке
            button.classList.add("tabs__button_active");

            // Убираем активные панели
            panels.forEach((panel) =>
                panel.classList.remove("tabs__panel_active")
            );

            // Получаем нужную панель
            const targetPanel = document.getElementById(button.dataset.tab);
            console.log("Целевая панель:", targetPanel);

            if (targetPanel) {
                targetPanel.classList.add("tabs__panel_active");
                console.log(
                    `Добавлен класс "tabs__panel_active" панели #${targetPanel.id}`
                );
            } else {
                console.error(`Панель с id="${button.dataset.tab}" не найдена`);
            }
        });
    });
}
