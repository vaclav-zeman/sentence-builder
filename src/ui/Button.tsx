import styled from 'styled-components'
import { ITheme } from '../theme'

interface IProps {
  variant: 'primary' | 'secondary'
  theme: ITheme
}

const background = (props: IProps) =>
  ({
    primary: props.theme.colors.primary,
    secondary: 'none',
  }[props.variant])

const color = (props: IProps) =>
  ({
    primary: props.theme.colors.white,
    secondary: props.theme.colors.text,
  }[props.variant])

const Button = styled.button`
  background: ${background};
  border-radius: 3rem;
  border: none;
  color: ${color};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
`

export default Button
