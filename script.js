document.getElementById("inputText").addEventListener("input", CheckVowels);

// Event listener for dark mode toggle
document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

function CheckVowels() {
    const textarea = document.getElementById("inputText");
    const text = textarea.value;
    const caseSensitive = document.getElementById("caseSensitive").checked;
    const processedText = caseSensitive ? text : text.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
    let highlighted = "";

    for (let char of text) {
        const checkChar = caseSensitive ? char : char.toLowerCase();
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(checkChar)) {
                vowelCount++;
                highlighted += `<span class="vowel">${char}</span>`;
            } else {
                consonantCount++;
                highlighted += char;
            }
        } else {
            highlighted += char;
        }
    }

    // Count words and characters (excluding spaces)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const characterCount = text.replace(/\s/g, '').length;

    document.getElementById("result").innerText = `Vowel count: ${vowelCount}`;
    document.getElementById("counts").innerText = `Vowels: ${vowelCount} | Consonants: ${consonantCount} | Characters: ${characterCount} | Words: ${words.length}`;
    document.getElementById("highlightedText").innerHTML = highlighted;
}


