import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #223a5f;
  padding: 20px;
  background-size: cover;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-bottom: 25px;
  @media screen and (max-width: 576px) {
    margin-bottom: 25px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
