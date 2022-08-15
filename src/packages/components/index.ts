import type { App, Plugin } from 'vue'

type PluginsObj = { [key: string]: Plugin }

interface Module {
  default: Plugin | PluginsObj
}

const PitayaComponent: Plugin = {
  install: (app: App) => {
    const modules = import.meta.glob('./**/**.ts', { eager: true })
    Object.keys(modules).forEach(k => {
      const { default: com } = modules[k] as Module
      if (com.install) {
        app.use(com as Plugin)
      } else if (typeof com === 'object') {
        const _com = com as PluginsObj
        Object.keys(_com).forEach(el => {
          const comItem = _com[el]
          if (comItem.install) {
            app.use(comItem)
          }
        })
      }
    })
  },
}

export * from './PitayaButton'
export default PitayaComponent
