import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Countdown from './components/countdown.component';
import NavbarComponent from './components/navbar.component';
import FooterComponent from './components/footer.component';
import HomePage from './components/home-page.component';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div id='darkModeDiv' className="text-center justify-content-center">
        <br />
        <Container>
          <Route exact path='/' component={ HomePage }  />
          <Route exact path='/countdown' component={ Countdown }  />        
        </Container>        
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
