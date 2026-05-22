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
expectIncludes('function normalizeWordKey(value)', 'word dedupe should normalize casing, spacing, and punctuation');
expectIncludes('const allTargetWords = dedupeWordList(rawWords);', 'batch import should dedupe by normalized word key');
expectIncludes('findCardIndexByWord(importCard.word)', 'file import should use normalized duplicate detection');
expectIncludes('collocations: normalizeCollocations(collocations),', 'cards should store core collocations separately from example sentences');
expectIncludes('"collocations": ["mitigate risk", "mitigate damage", "mitigate the impact"]', 'AI generation should request short useful collocations');
expectIncludes('renderContextForCurrentCard(currentCard);', 'review context area should render collocations before full example sentences');

console.log('vocab review static checks passed');
