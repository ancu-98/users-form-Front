import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import MyUser from './pages/MyUser'
import UserId from './pages/UserId'
import AdminUserId from './pages/AdminUserId'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<UserId/>} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='/me' element={<MyUser/>} />
          <Route path='/:id' element={<AdminUserId/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
