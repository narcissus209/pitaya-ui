import { withInstall } from '@/packages/utils'
import _PitayaButton from './PitayaButton.vue'

const PitayaButton = withInstall(_PitayaButton)
export default PitayaButton
export { PitayaButton }

declare module 'vue' {
  interface GlobalComponents {
    PitayaButton: typeof _PitayaButton
  }
}
