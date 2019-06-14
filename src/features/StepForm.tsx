import React from 'react'
import { Flex } from 'rebass'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import Input from '../ui/Input'
import Title from '../ui/Title'
import Button from '../ui/Button'
import { Steps } from '../redux/Form/reducer'
import { setActiveStep } from '../redux/Form/creators'

interface IProps {
  activeStep: Steps
  setActiveStep: (stepId: Steps) => void
}

type stepMessages = [string, string]

interface IMessages {
  [key: string]: stepMessages
}

// TODO
const messages: IMessages = {
  0: ['Who?', 'e.g. John Doe'],
  1: ['What?', 'e.g. is working out'],
  2: ['When?', 'e.g. at noon'],
  3: ['Where?', 'e.g. at Home'],
}

const StepForm = ({ activeStep, setActiveStep }: IProps) => {
  const [title, placeholder] = messages[activeStep]
  const isFirst = activeStep === Steps.WHO

  const handleSubmit = () => setActiveStep(activeStep + 1)
  const handleGoBack = () => setActiveStep(activeStep - 1)

  return (
    <Flex width={600} flexDirection="column">
      <Title>{title}</Title>
      <Input type="text" placeholder={placeholder} />
      <Flex mt={4} justifyContent="space-between">
        {isFirst ? (
          <span />
        ) : (
          <Button onClick={handleGoBack} secondary>
            Back
          </Button>
        )}
        <Button onClick={handleSubmit} type="submit">
          Continue
        </Button>
      </Flex>
    </Flex>
  )
}

const mapDispatchToProps = (state: IStore) => {
  const activeStep = state.Form.activeStep

  return {
    activeStep,
    // isFinal: state.Form.activeStep === Steps.WHEN,
  }
}

export default connect(
  mapDispatchToProps,
  { setActiveStep }
)(StepForm)
