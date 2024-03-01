function showOutput() {
    const textInput = document.getElementById('textInput').value.toLowerCase();
    const words = textInput.split(' '); // Split input text into individual words
    let output = '';

    // Iterate through each word and check against predefined mappings
    words.forEach(word => {
        let matchFound = false;
        if (word.length < 10) {
        for (const key in mappings) {
            if (word === key) { // Exact match
                output += mappings[key] + ' ';
                matchFound = true;
                break;
            } else if (word.includes(key)) { // Substring match
                output += mappings[key] + ' ';
                matchFound = true;
                break;
            }
        }
    } else {
        output += word;
    }
        if (!matchFound) {
            output += word;
        }
    });

    document.getElementById('output').textContent = output.trim();
}