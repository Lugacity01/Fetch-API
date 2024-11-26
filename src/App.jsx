import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/pages/Dashboard'
import Posts from './Dashboard/pages/Posts'
import CreateEditPost from './Dashboard/pages/CreateEditPost'
import Navbar from './Dashboard/navbar/Navbar'
import Settings from './Dashboard/pages/Settings'
import AdviseApp from './components/Advise-App/AdviseApp'
import MoreApp from './components/MoreApp'



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
        <Route path='more-app' element={<MoreApp/>} />
        <Route path='advise-app' element={<AdviseApp/>} />
        
      </Routes>
    </Router>
  )
}

export default App
