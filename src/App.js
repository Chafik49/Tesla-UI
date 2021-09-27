import './App.css';
import Header from './components/header/Header';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Sections from './components/pages/Sections';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path ="/" component={Sections}/>
        </Switch>

      </div>

    </Router>
    
  );
}

export default App;
