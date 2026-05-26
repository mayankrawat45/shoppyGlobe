import './App.css'
import Approuter from './routes/AppRouter'
import { RouterProvider } from 'react-router-dom'

function App() {

  return <RouterProvider router={Approuter}/>
}

export default App
