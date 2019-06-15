import React from 'react'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import Title from '../ui/Title'
import { setActiveStep } from '../redux/Form/creators'
import { Steps } from '../redux/Form/reducer'

interface IProps {
  setActiveStep: (stepId: Steps) => void
  values: any
}

const Sentence = ({ values, setActiveStep }: IProps) => {
  return (
    <Title>
      {Object.entries(values).map(([key, value]: any) => (
        <span onClick={() => setActiveStep(Number(key))} key={key}>
          {value || '----'}{' '}
        </span>
      ))}
    </Title>
  )
}

export default connect(
  (state: IStore) => ({ values: state.Form.values }),
  { setActiveStep }
)(Sentence)
