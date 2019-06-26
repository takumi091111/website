declare module 'highlight.js/lib/highlight' {
  import { HLJSStatic, IModeBase, IAutoHighlightResult } from 'highlight.js'

  function registerLanguage(
    name: string,
    language: Promise<(hljs?: HLJSStatic) => IModeBase>
  ): void

  function highlightAuto(
		value: string,
    languageSubset?: string[]
  ): IAutoHighlightResult
}

declare module 'highlight.js/lib/languages/*' {
  import { HLJSStatic, IModeBase } from 'highlight.js'

  const language: (hljs?: HLJSStatic) => IModeBase

  export default language
}
