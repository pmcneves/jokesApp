import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Header from "../containers/Header"
import Jokes from "../screens/Jokes/"
import Library from "../screens/Library/"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Redirect from="/" to="/jokes" exact />
                <Route path="/jokes" component={Jokes}/>
                <Route path="/library" component={Library} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
