import type { App, Plugin } from 'vue'
import Components from './components'

export const Pet: Plugin = {
  install: (app: App) => {
    app.use(Components)
  },
}

export * from './components'
export default Pet
