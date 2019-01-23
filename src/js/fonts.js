import webfontloader from 'webfontloader'

const webfont = new Promise(resolve => {
  webfontloader.load({
    google: {
      families: [
        'M PLUS Rounded 1c:400,700,800:japanese',
        'Fira Mono'
      ]
    },
    active () {
      resolve()
    }
  })
})

export default webfont
