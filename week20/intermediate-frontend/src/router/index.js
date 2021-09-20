import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Detail from '../pages/detail'

const Router = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/:id'>
                <Detail />
            </Route>
        </Switch>
    )
}

export default Router