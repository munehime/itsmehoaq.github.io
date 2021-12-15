import './App.css';
import { Routes, Route, Navigate, useLocation, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './components/Home';
import Skins from './components/Skins';
import Navbar from './components/Navbar';
const RouteTransition = () => { 
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="slide" timeout={200}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/skins.html" element={<Navigate to="/skins" />} />
          <Route path="/index.html" element={<Navigate to="/" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RouteTransition />
      </BrowserRouter>
    </div>
  );
}

export default App;

