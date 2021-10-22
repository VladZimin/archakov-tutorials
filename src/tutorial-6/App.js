import { Nav, Navbar, Row, Col, Card } from 'react-bootstrap'
import Article from './components/Article'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const Route = ({ path, children, exact }) => {
  const { pathname } = window.location
  if (exact) {
    if (pathname === path) {
      return children
    }
  } else {
    if (pathname.includes(path)) {
      return children
    }
  }
  return null
}

const App = () => {
  const { pathname } = window.location
  let postId = ''
  if (pathname.match(/\d+/)) {
    postId = pathname.match(/\d+/)[0]
  }
  console.log(postId)
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/post">
        <Article id={postId} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <br />
      <br />
      <Footer />
    </div>
  )
}
export default App
