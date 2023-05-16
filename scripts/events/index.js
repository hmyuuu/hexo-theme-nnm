/* global hexo */

'use strict';

hexo.on('generateBefore', () => {
  // Merge config.
  require('./lib/config')(hexo);
  require('./lib/stellar-tag-utils')(hexo);
  require('./lib/render-stylus')(hexo);
  if (hexo.theme.config.debug === "env") {
    require('./lib/check-environment')(hexo);
  }
});

hexo.on('ready', () => {
  const { version } = require('../../package.json');
  const decorated = (() => {
    const blank = 38 - 13 - version.length;
    let align = '', str = ''
    if (blank % 2 === 1) {
      str = '自炊 Volantis ' + version;
      align = String(' ').repeat(Math.floor(blank / 2)); 
    } else {
      str = '自炊 Volantis  ' + version;
      align = String(' ').repeat(Math.floor(blank / 2) - 1); 
    }
    return align + str + align;
  })();
  hexo.log.info(`┌──────────────────────────────────────────┐`);
  hexo.log.info(`│                                          │`);
  hexo.log.info(`│  Using theme: ymd45921's Jisui Volantis  │`);
  hexo.log.info(`│                                          │`);
  hexo.log.info(`│  ${decorated}  │`);
  hexo.log.info(`│        Based on Volantis 6.0-pjax        │`);
  hexo.log.info(`│                                          │`);
  hexo.log.info(`└──────────────────────────────────────────┘`);
});
