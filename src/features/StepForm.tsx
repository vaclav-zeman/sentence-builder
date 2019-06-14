import React from 'react'
import { Flex } from 'rebass'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import { setActiveStep, submitValues } from '../redux/Form/creators'
import { Steps } from '../redux/Form/reducer'
import Button from '../ui/Button'
import Form, { FormValues } from '../ui/Form'
import Input from '../ui/Input'
import Title from '../ui/Title'

interface IProps {
  activeStep: Steps
  initialValue: string
  setActiveStep: (stepId: Steps) => void
  submitValues: (stepId: Steps, value: string) => void
}

type stepMessages = [string, string]

interface IMessages {
  [key: string]: stepMessages
}

// TODO indexes
const messages: IMessages = {
  0: ['Who?', 'e.g. John Doe'],
  1: ['What?', 'e.g. is working out'],
  2: ['When?', 'e.g. at noon'],
  3: ['Where?', 'e.g. at Home'],
}

const inputKey = 'textInput'

const StepForm = ({ activeStep, initialValue, setActiveStep, submitValues }: IProps) => {
  const [title, placeholder] = messages[activeStep]
  const isFirst = activeStep === Steps.WHO
  const isLast = activeStep === Steps.WHERE

  const handleSubmit = (values: FormValues) => {
    submitValues(activeStep, values[inputKey])
    if (!isLast) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleGoBack = () => setActiveStep(activeStep - 1)

  return (
    <Flex width={600} flexDirection="column">
      <Title variant="secondary">{title}</Title>
      <Form onSubmit={handleSubmit} initialValues={{ [inputKey]: initialValue }}>
        {({ values, onChange, onSubmit }) => (
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name={inputKey}
              onChange={onChange}
              placeholder={placeholder}
              value={values[inputKey]}
            />
            <Flex mt={4} justifyContent="space-between">
              {isFirst ? (
                <span />
              ) : (
                <Button type="button" onClick={handleGoBack} secondary>
                  Back
                </Button>
              )}
              <Button type="submit">{isLast ? 'Update' : 'Continue'}</Button>
            </Flex>
          </form>
        )}
      </Form>
    </Flex>
  )
}

const mapDispatchToProps = (state: IStore) => {
  const activeStep = state.Form.activeStep

  return {
    activeStep,
    initialValue: state.Form.values[activeStep] || '',
  }
}

export default connect(
  mapDispatchToProps,
  { setActiveStep, submitValues }
)(StepForm)
