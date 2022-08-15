import type { App, Plugin } from 'vue'
import PitayaComponent from './components'

const Pitaya: Plugin = {
  install: (app: App) => {
    app.use(PitayaComponent)
  },
}

export * from './components'
export default Pitaya
