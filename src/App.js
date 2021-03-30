// Librairies
import { Switch, Route } from 'react-router-dom'
// Screens
import HomePage from './screens/HomePage'
// Components
import Header from './components/Header'
// Style
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/article/:id">
          {/* Single article page */}
        </Route>
      </Switch>
    </div>
  )
}

export default App
