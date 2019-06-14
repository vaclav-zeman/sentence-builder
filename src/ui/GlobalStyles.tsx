import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body, html {
        min-height: 100%;
        height: 100%;
        font-size: 10px;
    }

    *, *:after, *:before {
        box-sizing: border-box;
    }
`

export default GlobalStyles
