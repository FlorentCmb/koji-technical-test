// Librairies
import { Switch, Route } from 'react-router-dom'
// Screens
import HomePage from './screens/HomePage'
import ArticlePage from './screens/ArticlePage'
// Components
import Header from './components/Header'
// Style
import './App.css'

const App = () => {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/article/:id">
          <ArticlePage />
        </Route>
      </Switch>
    </main>
  )
}

export default App
