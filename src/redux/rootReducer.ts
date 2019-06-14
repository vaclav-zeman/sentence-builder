import { combineReducers } from 'redux'
import Form, { IFormState } from './Form/reducer'

export interface IStore {
  Form: IFormState
}

export default combineReducers({
  Form,
})
