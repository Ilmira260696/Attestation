import { Link } from 'react-router-dom'
import { Button } from '../../App.styles'
import * as S from './NotFound.styles'

export const NotFound = () => {
  return (
    <S.wrapper>
      <S.container>
        <S.NotFoundBlock>
          <S.Problem>
            <S.ProblemDis> Страница не найдена </S.ProblemDis>
          </S.Problem>
          <S.GoToMainButton>
            <Link to={`/`}>
              <Button>Вернуться на главную</Button>
            </Link>
          </S.GoToMainButton>
        </S.NotFoundBlock>
      </S.container>
    </S.wrapper>
  )
}
