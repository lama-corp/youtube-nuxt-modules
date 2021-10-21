export default function (moduleOptions) {
  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options.iAmAnOptionWithARandomName,
  }
  console.log('Module options/first.js ! Voici mes options:', options)

  // this.options.iAmAnOptionWithARandomName.randomValue2 = 'muhahaha'

  // add all of the initial plugins
  // const pluginsToSync = [
  //   'components/index.js',
  //   'store/index.js',
  //   'plugins/index.js',
  //   'debug.js',
  //   'middleware/index.js',
  // ]
  // for (const pathString of pluginsToSync) {
  //   this.addPlugin({
  //     src: resolve(__dirname, pathString),
  //     fileName: join(namespace, pathString),
  //     options,
  //   })
  // }
}
