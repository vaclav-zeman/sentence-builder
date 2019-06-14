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
  values: any
}

const initialState: IFormState = {
  activeStep: Steps.WHO,
  values: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
}

export default (state = initialState, action: FormActionTypes) => {
  switch (action.type) {
    case constants.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload.stepId }

    case constants.SUBMIT_VALUES:
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.stepId]: (action.payload as any).value, // TODO
        },
      }

    default:
      return state
  }
}
