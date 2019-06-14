import { Steps } from './reducer'
import constants from './constants'

interface SetActiveStepAction {
  type: typeof constants.SET_ACTIVE_STEP
  payload: { stepId: Steps }
}

export const setActiveStep = (stepId: Steps) => ({
  type: constants.SET_ACTIVE_STEP,
  payload: { stepId },
})

export type FormActionTypes = SetActiveStepAction
