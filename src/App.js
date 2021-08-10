import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Results from './pages/Results/Results'
import Logging from './pages/Logging/Logging'

function App() {
    return (
        <main>
        <Router>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/landing" component={Landing} />
                    <Route path="/results" component={Results} />
                    <Route path="/logging" component={Logging} />
                </Switch>
            </div>
        </Router>
        </main>
    );
}

export default App;
