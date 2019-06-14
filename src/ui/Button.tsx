import styled from 'styled-components'
import { ITheme } from '../theme'

interface IProps {
  secondary?: boolean
  theme: ITheme
}

const Button = styled.button`
  background: ${(props: IProps) => (props.secondary ? 'none' : props.theme.colors.primary)};
  border-radius: 3rem;
  border: none;
  color: ${(props: IProps) =>
    props.secondary ? props.theme.colors.text : props.theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
`

export default Button
