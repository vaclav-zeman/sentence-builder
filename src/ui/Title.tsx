import styled from 'styled-components'
import { ITheme } from '../theme'

interface IProps {
  theme: ITheme
}

const Title = styled.h1`
  font-size: 3.6rem;
  color: ${(props: IProps) => props.theme.colors.text};
`

export default Title
