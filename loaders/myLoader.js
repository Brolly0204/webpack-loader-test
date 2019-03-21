const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  // const result = source.replace('Brolly', options.name)
  // this.callback(null, result)
  const callback = this.async()

  setTimeout(() => {
    const result = source.replace('Brolly', options.name)
    callback(null, result)
  }, 1000)
}