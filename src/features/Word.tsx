import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import { scaleUp } from '../utils/animations'
import { usePrevious } from '../utils/hooks'

interface IProps {
  value: string
  onClick: (params: any) => void
}

const animationName = 'rise!'

const Span = styled(posed.div({ [animationName]: scaleUp }))`
  display: inline-block;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    opacity: 0.7;
  }
`

const Word = React.memo(
  ({ value = '', onClick }: IProps) => {
    const prevValue = usePrevious(value)
    const isNew = prevValue === '' && value.length > 0

    return (
      <Span pose={isNew ? animationName : ''} onClick={onClick}>
        {value || '----'}
      </Span>
    )
  },
  (prevProps: any, nextProps: any) => prevProps.value === nextProps.value
)

export default Word
