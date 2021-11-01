import path from 'path'
import defu from 'defu'
import consola from 'consola'

const defaultTailwindConfig = ({ rootDir, srcDir }) => ({
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
      `${srcDir}/components/**/*.{vue,js,ts}`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/plugins/**/*.{js,ts}`,
      `${rootDir}/nuxt.config.js`,
      `${rootDir}/nuxt.config.ts`,
    ],
  },
})

export default function (moduleOptions) {
  // get all options for the module
  const options = defu.arrayFn(moduleOptions, this.nuxt.options.tailwindcss, {
    configPath: 'tailwind.config.js',
    cssPath: path.join(this.nuxt.options.dir.assets, 'css', 'tailwind.css'),
    exposeConfig: false,
    config: defaultTailwindConfig(this.nuxt.options),
    viewer: this.nuxt.options.dev,
  })

  consola.log(
    'Module options/defu.js ! Voici mes options:',
    options.config.purge
  )

  // const options2 = Object.assign(
  //   {},
  //   {
  //     configPath: 'tailwind.config.js',
  //     cssPath: path.join(this.nuxt.options.dir.assets, 'css', 'tailwind.css'),
  //     exposeConfig: false,
  //     config: defaultTailwindConfig(this.nuxt.options),
  //     viewer: this.nuxt.options.dev,
  //   },
  //   this.nuxt.options.tailwindcss,
  //   moduleOptions
  // )
  // console.log(options2.config.purge)
}
