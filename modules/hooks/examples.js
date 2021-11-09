import { resolve } from 'path'

export default function () {
  this.nuxt.hook('listen', (server, { host, port }) => {
    const url = `${this.nuxt.server.listeners[0].url}auth/login`
    this.nuxt.options.cli.badgeMessages.push(`Go login: ${url}`)
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: resolve(__dirname, 'components'),
      prefix: 'hook',
    })
  })
}
