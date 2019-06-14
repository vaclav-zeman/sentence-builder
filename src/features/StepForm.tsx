import React from 'react'
import { Flex } from 'rebass'

import Input from '../ui/Input'
import Title from '../ui/Title'
import Button from '../ui/Button'

const StepForm = () => (
  <Flex width={600} flexDirection="column">
    <Title>Who?</Title>
    <Input type="text" placeholder="e.g. John Doe" />
    <Flex mt={4} justifyContent="space-between">
      <Button secondary>Back</Button>
      <Button type="submit">Continue</Button>
    </Flex>
  </Flex>
)

export default StepForm
