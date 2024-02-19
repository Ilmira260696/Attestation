import axios from 'axios'
import { USER_PER_PAGE, baseUrl } from './utils'

export async function getUsers({ searchText, pageNumber, order }) {
  const response = await axios.get(baseUrl, {
    params: {
      q: searchText,
      sort: 'repositories',
      order: order,
      per_page: USER_PER_PAGE,
      page: `${pageNumber}`,
    },
  })

  return response
}
