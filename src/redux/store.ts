import { createStore } from 'redux'
import reducers from './rootReducer'

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
