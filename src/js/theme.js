const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

export function onClickCheckbox() {
    document.body.classList.toggle(Theme.DARK);
    localStorage.theme = document.body.className;
};