import { Steps } from './reducer'
import constants from './constants'

interface SetActiveStepAction {
  type: typeof constants.SET_ACTIVE_STEP
  payload: { stepId: Steps }
}

interface SubmitValuesAction {
  type: typeof constants.SUBMIT_VALUES
  payload: { stepId: Steps; value: string }
}

export const setActiveStep = (stepId: Steps) => ({
  type: constants.SET_ACTIVE_STEP,
  payload: { stepId },
})

export const submitValues = (stepId: Steps, value: string) => ({
  type: constants.SUBMIT_VALUES,
  payload: { stepId, value },
})

export type FormActionTypes = SubmitValuesAction | SetActiveStepAction
