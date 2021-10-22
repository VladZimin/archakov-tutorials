import Article from './components/Article'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <Article />
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
