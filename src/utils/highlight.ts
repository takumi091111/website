import hljs from 'highlight.js/lib/highlight'

/* eslint @typescript-eslint/explicit-function-return-type: 0 */
hljs.registerLanguage(
  'cs',
  import('highlight.js/lib/languages/cs').then(m => m.default)
)
hljs.registerLanguage(
  'css',
  import('highlight.js/lib/languages/css').then(m => m.default)
)
hljs.registerLanguage(
  'go',
  import('highlight.js/lib/languages/go').then(m => m.default)
)
hljs.registerLanguage(
  'java',
  import('highlight.js/lib/languages/java').then(m => m.default)
)
hljs.registerLanguage(
  'javascript',
  import('highlight.js/lib/languages/javascript').then(m => m.default)
)
hljs.registerLanguage(
  'json',
  import('highlight.js/lib/languages/json').then(m => m.default)
)
hljs.registerLanguage(
  'php',
  import('highlight.js/lib/languages/php').then(m => m.default)
)
hljs.registerLanguage(
  'ruby',
  import('highlight.js/lib/languages/ruby').then(m => m.default)
)
hljs.registerLanguage(
  'shell',
  import('highlight.js/lib/languages/shell').then(m => m.default)
)
// hljs.registerLanguage('sql', import('highlight.js/lib/languages/sql'))
hljs.registerLanguage(
  'typescript',
  import('highlight.js/lib/languages/typescript').then(m => m.default)
)
hljs.registerLanguage(
  'xml',
  import('highlight.js/lib/languages/xml').then(m => m.default)
)

export { hljs }
