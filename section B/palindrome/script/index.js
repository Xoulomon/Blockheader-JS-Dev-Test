const input = document.getElementById('sentenceInput');
    const cleanedDisplay = document.getElementById('cleaned');
    const resultDisplay = document.getElementById('result');
    const checkBtn = document.getElementById('checkBtn');

    function cleanSentence(text) {
      return text.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    function isPalindrome(text) {
      const reversed = text.split('').reverse().join('');
      return text === reversed;
    }

    function checkPalindrome() {
      const raw = input.value.trim();
      resultDisplay.className = ''; // Clear animation and class first

      if (raw === "") {
        cleanedDisplay.textContent = '';
        resultDisplay.textContent = '';
        return;
      }

      const cleaned = cleanSentence(raw);
      cleanedDisplay.textContent = `🧼 Cleaned: ${cleaned}`;

      if (isPalindrome(cleaned)) {
        resultDisplay.textContent = "✅ Yes, it’s a palindrome";
        resultDisplay.className = "valid fade-in";
      } else {
        resultDisplay.textContent = "❌ No, it’s not a palindrome";
        resultDisplay.className = "invalid fade-in";
      }
    }

    input.addEventListener('input', () => {
      cleanedDisplay.textContent = '';
      resultDisplay.textContent = '';
      resultDisplay.className = '';
    });

    checkBtn.addEventListener('click', checkPalindrome);