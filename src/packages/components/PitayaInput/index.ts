import { withInstall } from '@/packages/utils'
import _PitayaInput from './PitayaInput.vue'
import _PitayaInputTwo from './PitayaInputTwo.vue'

const PitayaInput = withInstall(_PitayaInput)
const PitayaInputTwo = withInstall(_PitayaInputTwo)
export default { PitayaInput, PitayaInputTwo }
export { PitayaInput, PitayaInputTwo }

declare module 'vue' {
  interface GlobalComponents {
    PitayaInput: typeof _PitayaInput
    PitayaInputTwo: typeof _PitayaInputTwo
  }
}
