import styled from 'styled-components'
import { Button } from '../../App.styles'

export const SearchBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const SearchText = styled.input`
  width: 100%;
  max-width: 1000px;
  border: 1px solid #5e5c5c;
  border-radius: 6px;
  background-color: transparent;
  padding: 2px 10px;
  font-size: 16px;
  line-height: 160%;
  color: #000000;

  &::placeholder {
    background-color: transparent;
    color: #b2b0b0;
    font-size: 16px;
    line-height: 160%;
  }
`

export const SearchButton = styled(Button)`
  font-size: 16px;
  line-height: 160%;
  color: #ffffff;
  border-radius: 6px;
  padding: 3px 10px;
  transition: all 0.3s ease-out;
`

export const MainTitle = styled.h2`
  color: #000;
  font-size: 30px;
  line-height: 220%;
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
`

export const MainHeading = styled(MainTitle)`
  font-size: 24px;
`
