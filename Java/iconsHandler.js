export function toggleEdit(inputElement, editIcon) {
    if (editIcon.classList.contains("fa-pencil")) {
        editIcon.classList.replace("fa-pencil", "fa-save");
        inputElement.removeAttribute("readonly");
        inputElement.focus();
    } else {
        editIcon.classList.replace("fa-save", "fa-pencil");
        inputElement.setAttribute("readonly", "readonly");
    }
}

export function createFontAwesomeIcon(iconClass, clickHandler) {
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add(iconClass);
    icon.classList.add("fa-solid");
    icon.addEventListener("click", clickHandler);
    return icon;
}