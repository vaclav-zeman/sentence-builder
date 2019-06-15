import constants from './constants'
import { FormActionTypes } from './creators'

export enum Steps {
  WHO = 0,
  WHAT = 1,
  WHEN = 2,
  WHERE = 3,
}

export interface IFormState {
  activeStep: Steps
  values: any
}

const initialState: IFormState = {
  activeStep: Steps.WHO,
  values: {
    [Steps.WHO]: '',
    [Steps.WHAT]: '',
    [Steps.WHEN]: '',
    [Steps.WHERE]: '',
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
