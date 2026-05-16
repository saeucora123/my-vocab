const fs = require('fs');
const path = require('path');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, '..', 'listening.html'), 'utf8');

function expectIncludes(fragment, message) {
  assert(html.includes(fragment), message);
}

expectIncludes('height: 100dvh', 'body should use dynamic viewport height for iPad Safari keyboard/toolbars');
expectIncludes('--ipad-toolbar-offset', 'iPad toolbar offset variable should reserve bottom space');
expectIncludes('body.is-training-active #mobile-toolbar', 'mobile toolbar should only be forced visible during training');
expectIncludes("document.body.classList.add('is-training-active')", 'training mode should enable mobile toolbar visibility');
expectIncludes("document.body.classList.remove('is-training-active')", 'summary/end state should hide mobile toolbar');
expectIncludes('window.innerWidth <= 1180', 'input focus scroll should cover iPad landscape widths');
expectIncludes('min-height: 52px', 'touch toolbar buttons should meet iPad tap target size');

console.log('listening iPad static checks passed');
