function validate(input) {
    if(input.value.trim() === "") {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "green";
    }
}

document.querySelectorAll("input").forEach(function(input) {
    input.addEventListener("input", function() {
        var inputText = this.value;
        var isEnglish = hasEnglishCharacters(inputText);
    
        if (!inputText) {
            // If input text is empty, assume English input
            this.classList.remove("urduCursor");
            this.classList.add("englishCursor");
        } else if (!this.classList.contains("urduCursor")) {
            if (isEnglish) {
                this.classList.remove("urduCursor");
                this.classList.add("englishCursor");
            } else {
                this.classList.remove("englishCursor");
                this.classList.add("urduCursor");
            }
        }
    });
});

function hasEnglishCharacters(text) {
    return /[a-zA-Z]/.test(text);
}