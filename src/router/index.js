import {Switch, Route} from 'react-router-dom'
import Home from '../view/Home'
import Signin from '../view/Signin'
import Signup from '../view/Signup'
import Forgot from '../view/Forgot'

const ROUTER = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Signin />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/forgot" exact>
        <Forgot/>
      </Route>
    </Switch>
  )
}
export default ROUTER