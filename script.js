document.addEventListener("DOMContentLoaded", function() {
    const words = ["Developer", "Moderator", "Gamer", "Student", "Stargazer"];
    let currentWordIndex = 0;
    const typewriterTextElement = document.querySelector(".typewriter-text");

    function typeWriterEffect(word, index = 0) {
        if (index < word.length) {
            typewriterTextElement.textContent += word.charAt(index);
            setTimeout(() => typeWriterEffect(word, index + 1), 167); // Typing speed: ~167ms per character (1.5 seconds total)
        } else {
            setTimeout(eraseEffect, 3000); // Word stays for 3 seconds before erasing
        }
    }

    function eraseEffect() {
        const currentText = typewriterTextElement.textContent;
        if (currentText.length > 0) {
            typewriterTextElement.textContent = currentText.substring(0, currentText.length - 1);
            setTimeout(eraseEffect, 111); // Erasing speed: ~111ms per character (1 second total)
        } else {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(() => typeWriterEffect(words[currentWordIndex]), 500); // Short delay before typing the next word
        }
    }

    typeWriterEffect(words[currentWordIndex]);
});
