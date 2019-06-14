import styled from 'styled-components'
import { ITheme } from '../theme'

interface IProps {
  theme: ITheme
  variant?: 'primary' | 'secondary'
}

const fontSize = (props: IProps) =>
  ({ secondary: '2.6rem', primary: '3.6rem' }[props.variant || 'primary'])

const Title = styled.h1`
  font-size: ${fontSize};
  color: ${(props: IProps) => props.theme.colors.text};
`

export default Title
