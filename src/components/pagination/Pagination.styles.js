import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  list-style-type: none;
  max-width: 700px;
  padding-top: 50px;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 0 5px;
  }

  li a {
    border-radius: 7px;
    padding: 5px 15px;
    border: 1px solid gray;
    cursor: pointer;
    &:hover {
      background-color: #a8e4a0;
    }

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 120%;
      padding: 2px 10px;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #44944a;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`
