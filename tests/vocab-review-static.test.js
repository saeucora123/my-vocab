const fs = require('fs');
const path = require('path');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function expectIncludes(fragment, message) {
  assert(html.includes(fragment), message);
}

expectIncludes("const wasAnswerHidden = document.getElementById('ratingButtons').classList.contains('hidden');", 'reveal should detect whether this call is the first card reveal');
expectIncludes('if (shouldAutoSpeakOnReveal) {', 'reveal should guard auto pronunciation behind actual reveal');
expectIncludes('speakCurrentCard();', 'reveal should pronounce the current word after the card is uncovered');

console.log('vocab review static checks passed');
