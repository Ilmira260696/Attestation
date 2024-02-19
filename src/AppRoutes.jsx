import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound/NotFound'
import { Main } from './pages/Main/MainPage'
import { Layout } from './pages/Layout/Layout'
import { UserPage } from './pages/UserPage/UserPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/user/:id"
          element={<UserPage />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
