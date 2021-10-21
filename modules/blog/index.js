import path from 'path'
import {
  loadComponents,
  loadLayouts,
  loadPlugins,
  // loadStore,
} from '../../utils/module-helpers'

export default function () {
  loadComponents(this, __dirname, 'blog')
  loadLayouts(this, __dirname, 'blog')
  loadPlugins(this, __dirname)

  this.extendRoutes((routes) => {
    // Add one or more elements at the beginning of the array
    routes.unshift({
      name: 'blog-articles',
      path: '/blog/articles',
      component: path.resolve(__dirname, 'pages/articles.vue'),
    })
  })
}
