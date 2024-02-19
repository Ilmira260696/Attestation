import styled from 'styled-components'

export const wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`
export const container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`
export const NotFoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Problem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 300px;
`
export const ProblemDis = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  line-height: 40px;
`
export const GoToMainButton = styled.div`
  width: 278px;
  height: 52px;
  color: #d0cece;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`
