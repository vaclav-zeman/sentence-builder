import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './ui/GlobalStyles'
import Layout from './ui/Layout'
import store from './redux/store'
import StepForm from './features/StepForm'
import theme from './theme'
import Sentence from './features/Sentence'

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
