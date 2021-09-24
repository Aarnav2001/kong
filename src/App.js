import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Segment1 from './components/Segment 1/Segment1';
import Segment2 from './components/Segment 2/Segment2';
import Segment3 from './components/Segment 3/Segment3';
import Segment4 from './components/Segment 4/Segment4';
import Segment5 from './components/Segment 5/Segment5';
import Segment6 from './components/Segment 6/Segment6';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              {/*<Route exact path='/' component={} />*/}
          </Switch>
      </Router>
      <Navbar/>
      <div class='bg-all flex flex-col px-10'>
        <Segment1/>
        <Segment2/>
        <Segment3/>
        <Segment4/>
        <Segment5/>
        <Segment6/>
      </div>
    </div>
  );
}

export default App;
