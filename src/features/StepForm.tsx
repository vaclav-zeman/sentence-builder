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
type MessagesType = { [index in Steps]: stepMessages }

const messages: MessagesType = {
  [Steps.WHO]: ['Who?', 'e.g. Jenkins'],
  [Steps.WHAT]: ['What?', 'e.g. is coding'],
  [Steps.WHEN]: ['When?', 'e.g. today'],
  [Steps.WHERE]: ['Where?', 'e.g. at home'],
}

const inputKey = 'textInput'

const StepForm = ({ activeStep, initialValue, setActiveStep, submitValues }: IProps) => {
  const [title, placeholder] = messages[activeStep]
  const isFirst = activeStep === Steps.WHO
  const isLast = activeStep === Steps.WHERE

  const handleSubmit = (values: FormValues) => {
    // Prevent re-render when editing
    if (initialValue !== values[inputKey]) {
      submitValues(activeStep, values[inputKey])
    }

    if (!isLast) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleGoBack = () => setActiveStep(activeStep - 1)

  return (
    <Flex width={[1, 1 / 2, 1 / 3]} flexDirection="column">
      <Title variant="secondary" as="h2">
        {title}
      </Title>
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
            <Flex mt={4} justifyContent={isFirst ? 'flex-end' : 'space-between'}>
              {!isFirst && (
                <Button type="button" onClick={handleGoBack} variant="secondary">
                  Back
                </Button>
              )}
              <Button type="submit" variant="primary">
                {isLast ? 'Update' : 'Continue'}
              </Button>
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
