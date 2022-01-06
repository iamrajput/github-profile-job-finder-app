import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './componenets/layouts/Navbar'
import Footer from './componenets/layouts/Footer'
import Alert from './componenets/layouts/Alert'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import {GithubProvider} from './context/github/githubContext'
import {AlertProvider} from './context/alert/AlertContext'
import User from './pages/User'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/user/:login' element={<User />}/>
              <Route path='/notfound' element={<NotFound />}/>
              <Route path='/*' element={<NotFound />}/>
          </Routes>
          </main>
        <Footer />
      </div>
      
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;