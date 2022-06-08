// Подключение функционала "Чертогов Фрилансера"
import { controlHeaderBurger } from "./custom/burger.js";
import { controlLangButton } from "./custom/lang-button.js";
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

controlHeaderBurger();
controlLangButton();
