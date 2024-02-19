import { MyPaginate } from './Pagination.styles'
import { PaginationBlock } from '../../App.styles'
export const Pagination = ({
  onNextPageClick,
  onPrevPageClick,
  nav = null,
  disable,
}) => {
  const handleNextPageClick = () => {
    onNextPageClick()
  }
  const handlePrevPageClick = () => {
    onPrevPageClick()
  }

  return (
    <PaginationBlock>
      <MyPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakClassName={'break-me'}
        pageCount={nav.total}
        marginPagesDisplayed={2}
        onPageChange={onNextPageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationBlock>
  )
}
