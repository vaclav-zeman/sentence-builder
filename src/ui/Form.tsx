import React, { useState, useCallback, useEffect } from 'react'

export type FormValue = string
export type FormValues = { [key: string]: FormValue }

interface IProps {
  children: (params: { values: FormValues; onChange: any; onSubmit: any }) => React.ReactElement
  onSubmit: (values: FormValues) => void
  initialValues: FormValues
}

const Form = ({ children, initialValues = {}, onSubmit }: IProps) => {
  const [values, setValues] = useState(initialValues)

  // This updates values when user goes through steps
  useEffect(() => setValues(initialValues), [initialValues])

  // Memoizing handlers to keep their reference if deps don't change
  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      setValues(initialValues)
      onSubmit(values)
    },
    [initialValues, values, onSubmit]
  )

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
