import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/pages/Dashboard'
import Posts from './Dashboard/pages/Posts'
import CreateEditPost from './Dashboard/pages/CreateEditPost'
import Navbar from './Dashboard/navbar/Navbar'
import Settings from './Dashboard/pages/Settings'



function App() {


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Navbar />}>
          <Route index element={<Dashboard/>} />
          <Route path='posts/:ids' element={<Posts/>} />
          <Route path='create-post' element={<CreateEditPost/>} />
          <Route path='edit-post/:ids' element={<CreateEditPost/>} />
          <Route path='settings' element={<Settings/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
