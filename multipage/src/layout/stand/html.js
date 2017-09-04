import layout from './html.pug'

export default {
  render(content, components = {}, resource) {
    const depencies = {}

    Object.keys(components).forEach((key) => {
      depencies[key] = components[key]()
    })
    Object.assign(depencies, resource)

    const renderData = {
      content: content(depencies),
    }

    return layout(renderData)
  },
}
