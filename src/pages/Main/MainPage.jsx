import { useCallback, useContext, useEffect, useState } from 'react'
import * as S from './MainPage.styles'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import { Error } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'
import { getUsers } from '../../api'
import { Context } from '../../Context'
import { USER_PER_PAGE } from '../../utils'

export const Main = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pagesCount, setPagesCount] = useState(0)
  const [order, setOrder] = useState('desc')
  
  const [
    usersList,
    setUsersList,
    searchText,
    setSearchText,
    pageNumber,
    setPageNumber,
  ] = useContext(Context)

  const getDataUsers = async () => {
    await getUsers({ searchText, pageNumber, order })
      .then((response) => {
        setUsersList(response.data.items)
        setPagesCount(Math.ceil(response.data.total_count / USER_PER_PAGE))
        if (response.data.items.length === 0) {
          setError('Ничего не найдено')
          return
        }
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setError('Введите логин пользователя, которого хотите найти')
        } else if (err.response.status === 403) {
          setError('Вы превысили лимит запросов, попробуйте позже')
        } else if (err.response.status === 503) {
          setError('Ошибка сервера, попробуйте позже')
        } else {
          setError(err.message)
        }
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (searchText) {
      getDataUsers()
    }
  }, [pageNumber, order])

  const handleClickSearchButton = () => {
    setIsLoading(true)
    setError(null)
    setPageNumber(1)

    getDataUsers()
  }

  const handleNextPageClick = useCallback(() => {
    const current = pageNumber
    const next = current + 1
    const total = usersList ? pagesCount : current

    setPageNumber(next <= total ? next : current)
  }, [pageNumber, usersList])

  const handlePrevPageClick = useCallback(() => {
    const current = pageNumber
    const prev = current - 1

    setPageNumber(prev > 0 ? prev : current)
  }, [pageNumber])

  return (
    <>
      <S.MainTitle>Приложение по поиску пользователей GitHub</S.MainTitle>
      <S.SearchBlock>
        <S.SearchText
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Введите логин пользователя"
          name="search"
        />
        <S.SearchButton onClick={handleClickSearchButton}>Поиск</S.SearchButton>
      </S.SearchBlock>

      {isLoading ? (
          <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
          Идёт загрузка...
      </h1>
      ) : error ? (
        <Error>{error}</Error>
      ) : !usersList.length > 0 ? (
        <S.MainHeading>
          Здесь будет список найденных пользователей
        </S.MainHeading>
      ) : (
        <>
          <Filter
            order={order}
            setOrder={setOrder}
          />

          <Users usersData={usersList} />

          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: pageNumber === 1,
              right: pageNumber === pagesCount,
            }}
            nav={{ current: pageNumber, total: pagesCount }}
          />
        </>
      )}
    </>
  )
}
