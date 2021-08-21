import './styles.css';
import menuFoodService from './menu.json';
import { createMenuFoodService } from './js/menu';
import { onClickCheckbox } from './js/theme';
import refs from './js/refs';

const menuMarkup = createMenuFoodService(menuFoodService);
refs.menu.insertAdjacentHTML('afterbegin', menuMarkup);

refs.input.addEventListener('click', onClickCheckbox);

if (localStorage.theme) {
    document.body.className = localStorage.theme;
    refs.input.checked = true;
} else {
    localStorage.clear();
    refs.input.checked = false;
}
