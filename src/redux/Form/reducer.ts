import constants from './constants'
import { FormActionTypes } from './creators'
import { FormValues } from '../../features/Form'

export enum Steps {
  WHO,
  WHAT,
  WHEN,
  WHERE,
}

export interface IFormState {
  activeStep: Steps
  values: any
}

const initialState: IFormState = {
  activeStep: Steps.WHO,
  values: {},
}

export default (state = initialState, action: FormActionTypes) => {
  switch (action.type) {
    case constants.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload.stepId }

    // case constants.SUBMIT_VALUES:
    //   return {...state, values: {

    //   }}
    default:
      return state
  }
}
