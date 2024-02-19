import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
import * as S from './UserPage.styles'

export const UserPage = () => {
  const params = useParams()
  const loginUser = params.id
  const [usersList] = useContext(Context)

  const navigate = useNavigate()

  const userInfo = usersList.filter((user) => user.login === loginUser)

  return (
    <>
      <S.ProfileTitle>Информация о пользователе</S.ProfileTitle>
      <S.ProfileUser>
        <S.UserAvatar>
          <S.UserAvatarImg src={userInfo[0].avatar_url} />
        </S.UserAvatar>
        <S.UserInfoContainer>
          <S.UserInfoText>Логин: {userInfo[0].login}</S.UserInfoText>

          <S.UserInfoText>
            Ссылка на Github:
            <a
              href={userInfo[0].html_url}
              target="_blank"
              rel="noreferrer"
            >
              {userInfo[0].html_url}
            </a>
          </S.UserInfoText>
        </S.UserInfoContainer>
      </S.ProfileUser>
      <S.GoMainPageButton
        onClick={() => {
          navigate('/', { replace: true })
        }}
      >
        Вернуться на главную
      </S.GoMainPageButton>
    </>
  )
}
