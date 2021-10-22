import { Nav, Navbar, Row, Col, Card } from 'react-bootstrap'
import Article from './components/Article'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post">
          <Article id={postId} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <h1 style={{ textAlign: 'center' }}>Данная старница отсутствует!</h1>
        </Route>
      </Switch>
      <br />
      <br />
      <Footer />
    </div>
  )
}
export default App
