import React from 'react'
import { connect } from 'react-redux'

import { IStore } from '../redux/rootReducer'
import Title from '../ui/Title'

const Sentence = ({ values }: any) => {
  const sentence = Object.values(values)
    .map(value => (value === '' ? '-----' : value))
    .join(' ')

  return <Title>{sentence}</Title>
}

export default connect((state: IStore) => ({ values: state.Form.values }))(Sentence)
