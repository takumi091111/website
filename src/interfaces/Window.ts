/* eslint @typescript-eslint/no-explicit-any: 0 */

interface DisqusWindow extends Window {
  DISQUS: any
  disqus_config: any
}
declare var window: DisqusWindow
export default window
