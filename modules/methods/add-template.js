import path from 'path'

export default function () {
  console.log(this.options)
  this.addTemplate({
    src: path.resolve(__dirname, 'ModuleAddTemplateComponent.vue'),
    filename: 'ModuleAddTemplateComponent.vue',
  })
}
