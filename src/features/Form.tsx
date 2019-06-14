import React, { useState, useCallback } from 'react'

type FormValues = { [key: string]: string | number }

interface IProps {
  children: (params: { values: FormValues; onChange: any; onSubmit: any }) => React.ReactChildren
  onSubmit: (values: FormValues) => void
  initialValues: FormValues
}

const Form = ({ children, initialValues = {}, onSubmit }: IProps) => {
  const [values, handleChange] = useState(initialValues)
  const handleSubmit = useCallback(() => onSubmit(values), [values, onSubmit])

  return children({ values, onChange: handleChange, onSubmit: handleSubmit })
}

export default Form
