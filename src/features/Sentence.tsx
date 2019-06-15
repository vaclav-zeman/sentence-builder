import React from 'react'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import { setActiveStep } from '../redux/Form/creators'
import { Steps } from '../redux/Form/reducer'
import Title from '../ui/Title'
import Word from './Word'

interface IProps {
  setActiveStep: (stepId: Steps) => void
  values: any
}

const Sentence = ({ values, setActiveStep }: IProps) => {
  return (
    <Title>
      {Object.entries(values).map(([key, value]: any) => (
        <Word key={key} onClick={() => setActiveStep(Number(key))} value={value} />
      ))}
    </Title>
  )
}

export default connect(
  (state: IStore) => ({ values: state.Form.values }),
  { setActiveStep }
)(Sentence)
