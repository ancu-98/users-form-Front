import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../store/slices/users.slice"

const Home = () => {

  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  console.log(users)

  return (
    <div>Home</div>
  )
}

export default Home