import styled from 'styled-components'

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 40px 26px;
  margin-left: 40px;
  justify-content: center;

  @media screen and (max-width: 1226px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 930px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }
`

export const Card = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
`

export const CardImg = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  border: 1px solid #f0f0f0;
  transition: all 0.5s linear;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px #4b4848;
  }
`
export const CardImgUser = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  font-size: 22px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease-out;
`

export const CardDetails = styled.p`
  color:#44944a;
  font-size: 14px;
  line-height: 33px;
  margin-bottom: 10px;

  &:hover {
    color: #a8e4a0;
`
