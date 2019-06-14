import constants from './constants'
import { FormActionTypes } from './creators'

export enum Steps {
  WHO,
  WHAT,
  WHEN,
  WHERE,
}

export interface IFormState {
  activeStep: Steps
}

const initialState: IFormState = {
  activeStep: Steps.WHO,
}

export default (state = initialState, action: FormActionTypes) => {
  switch (action.type) {
    case constants.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload.stepId }
    default:
      return state
  }
}
