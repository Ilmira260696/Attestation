import { Link } from 'react-router-dom'
import * as S from './Users.styles'

export const Users = ({ usersData }) => {
  return (
    <S.MainContent>
      <S.Cards>
        {usersData?.map((user) => (
          <S.Card key={user.id}>
            <S.CardTitle>{user.login}</S.CardTitle>
            <Link to={`/user/${user.login}`}>
              <S.CardDetails>Перейти в профиль</S.CardDetails>
            </Link>
          </S.Card>
        ))}
      </S.Cards>
    </S.MainContent>
  )
}
