import React, { useState, useCallback } from 'react'
import { compose } from 'redux'

export type FormValue = string
export type FormValues = { [key: string]: FormValue }

interface IProps {
  children: (params: { values: FormValues; onChange: any; onSubmit: any }) => React.ReactElement
  onSubmit: (values: FormValues) => void
  initialValues: FormValues
}

const Form = ({ children, initialValues = {}, onSubmit }: IProps) => {
  const [values, setValues] = useState(initialValues)

  const handleSubmit = useCallback(() => {
    setValues(initialValues)
    onSubmit(values)
  }, [initialValues, values, onSubmit])

  const handleChange = useCallback(
    (value: FormValue, name: FormValue) => setValues({ ...values, [name]: value }),
    [values]
  )

  return children({
    values,
    onChange: handleChange,
    onSubmit: handleSubmit,
  })
}

export default Form
