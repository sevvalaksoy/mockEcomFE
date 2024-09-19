import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/home'
import Chart from './pages/chart'
import Profile from './pages/profile'
import MostlyAdded from './pages/mostlyAdded'
import SignUp from './pages/signup'
import MostSold from './pages/mostSold'

function App() {

  return (
    <>
      <Switch>
      <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/chart" exact>
          <Chart/>
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        <Route path="/mostSold" exact>
          <MostSold/>
        </Route>
        <Route path="/mostlyAdded" exact>
          <MostlyAdded/>
        </Route>
        <Route path="/signUp" exact>
          <SignUp/>
        </Route>
      </Switch>
    </>
  )
}

export default App
