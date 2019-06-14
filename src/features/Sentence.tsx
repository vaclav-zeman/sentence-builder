import React from 'react'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import { FormValues } from '../ui/Form'
import Title from '../ui/Title'

const Sentence = ({ values }: FormValues) => {
  return (
    <Title>
      {Object.entries(values).map(([key, value]) => (
        <span key={key}>{value || '----'} </span>
      ))}
    </Title>
  )
}

export default connect((state: IStore) => ({ values: state.Form.values }))(Sentence)
