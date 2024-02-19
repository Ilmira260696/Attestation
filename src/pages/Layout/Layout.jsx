import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../Context'
import {
  Container,
  Wrapper,
  GlobalStyles,
  MainContainer,
} from '../../App.styles'

export const Layout = () => {
  const [usersList, setUsersList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const contextValue = [
    usersList,
    setUsersList,
    searchText,
    setSearchText,
    pageNumber,
    setPageNumber,
  ]

  return (
    <>
      <GlobalStyles />
      <Container>
        <Wrapper />
        <MainContainer>
          <Context.Provider value={contextValue}>
            <Outlet />
          </Context.Provider>
        </MainContainer>
      </Container>
    </>
  )
}
