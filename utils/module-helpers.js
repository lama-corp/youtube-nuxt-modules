import { resolve } from 'path'
import { readdirSync } from 'fs'

export const loadComponents = (context, dirname, prefix) => {
  context.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: resolve(dirname, 'components'),
      prefix,
    })
  })
}

export const loadLayouts = (context, dirname, prefix) => {
  const layoutsPath = resolve(dirname, 'layouts')
  for (const file of readdirSync(layoutsPath)) {
    const layoutName = file.substr(0, file.indexOf('.'))
    context.addLayout(
      resolve(dirname, `layouts/${file}`),
      `${prefix}.${layoutName}`
    )
  }
}

export const loadPlugins = (context, dirname) => {
  const pluginsPath = resolve(dirname, 'plugins')
  for (const file of readdirSync(pluginsPath)) {
    context.addPlugin(resolve(dirname, `plugins/${file}`))
  }
}

// export const loadStoreModules = async (store, dirname, name) => {
//   await store.registerModule(name, {})
//   const storesPath = resolve(dirname, 'store')
//   for (const file of readdirSync(storesPath)) {
//     const storeName = file.substr(0, file.indexOf('.'))
//     const storeModule = await import(`${dirname}/store/${file}`)
//     await storeModule.registerModule([name, storeName], storeModule, {
//       namespaced: storeModule.namespaced,
//     })
//   }
// }
