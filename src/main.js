import * as components from './components'

function kebabCase (str) {
    const result = str.replace(
        /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
        match => '-' + match.toLowerCase()
    )
    return (str[0] === str[0].toUpperCase())
        ? result.substring(1)
        : result
}

const ComponentLibrary = {
    install(Vue) {
        for (const componentName in components) {
            const component = components[componentName]

            Vue.component(kebabCase(componentName), component)
        }
    }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}
