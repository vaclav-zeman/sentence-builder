import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../theme'

interface IProps {
  theme: ITheme
}

interface IComponentProps {
  name: string
  onChange: (value: number | string, name: string) => void
  type: 'text'
  placeholder?: string
  value: number | string
}

const Input = styled.input`
  background: white;
  border-radius: 1rem;
  border: 0.15rem solid white;
  box-shadow: 0 1.5rem 3rem rgba(34, 36, 38, 0.15);
  font-size: 1.8rem;
  height: 6rem;
  outline: none;
  padding: 0 2rem;
  transition: border 300ms;
  width: 100%;

  &:focus,
  &:active {
    border-color: ${(props: IProps) => props.theme.colors.primary};
  }
`

const InputComponent = ({ name, onChange, value, type, placeholder }: IComponentProps) => (
  <Input
    name={name}
    onChange={e => onChange(e.target.value, name)}
    placeholder={placeholder}
    type={type}
    value={value}
  />
)

export default InputComponent
