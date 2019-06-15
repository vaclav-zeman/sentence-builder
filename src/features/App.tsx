import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../ui/GlobalStyles'
import Layout from '../ui/Layout'
import Sentence from './Sentence'
import StepForm from './StepForm'
import store from '../redux/store'
import theme from '../theme'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Sentence />
          <StepForm />
          <GlobalStyles />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
