function transformText(option) {
    var inputText = document.getElementById("idNome");
    var uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
    var lowercaseCheckbox = document.getElementById("lowercaseCheckbox");

    if (option === 'uppercase') {
        lowercaseCheckbox.checked = false;
        inputText.value = inputText.value.toUpperCase();
    } else if (option === 'lowercase') {
        uppercaseCheckbox.checked = false;
        inputText.value = inputText.value.toLowerCase();
    }
}
