import './App.css';
import About from './components/View/About';
import BookingNow from './components/View/BookingNow';
import Home from './components/View/Home';
import Services from './components/View/Services';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Gallery from './components/View/Gallery';


function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/booking_now">
            <BookingNow/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
