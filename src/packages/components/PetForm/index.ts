import { withInstall } from '../../utils'
import _PetForm from './PetForm.vue'

export const PetForm = withInstall(_PetForm)
export default PetForm

declare module 'vue' {
  export interface GlobalComponents {
    PetForm: typeof PetForm
  }
}
