import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf');
    font-style: normal;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

html,
body {
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

input,
button,
a {
  font-family: 'Roboto', sans-serif;
}

input,
button {
  border: none;
  outline: none;
}

ul li {
  list-style: none;
}
`
export const PaginationBlock = styled.div `
margin-left:220px;
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`
export const Wrapper = styled.div `
background-color: #44944a;
margin: 0 auto;
padding: 20px 10px;
`
export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 10px 30px;
`

export const Button = styled.button`
  color: #fff;
  background-color: #44944a;
  border-radius: 6px;
  border: 1px solid #fff;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 150%;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #a8e4a0;
  }
`

const rotate = keyframes`
0% {
  transform: rotate(0)
}
100% {
  transform: rotate(360deg)
}
`
export const Error = styled.div`
  color: #e32636;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 20px;
  text-align: center;
`
