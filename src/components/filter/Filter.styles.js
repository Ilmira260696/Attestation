import styled from 'styled-components'

export const CenterblockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 15px;
`

export const FilterTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-right: 10px;
  margin-left: 250px;
`

export const FilterButton = styled.div`
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  border-color: #000;
  color: #000;
  cursor: pointer;

  ${({ $activeButton }) =>
    $activeButton && 'border-color: #44944a ;color:  #44944a; cursor: pointer;'}
`
