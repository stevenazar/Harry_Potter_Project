import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Favourites from './Pages/Favourites';
import StripeComponent from './Pages/Stripecomponent';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import DarkSideTheme from './components/Theme';

function App() {
  
  const user = false;
  const [authentificator] = useAuthState(auth);

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar user={authentificator}/>
          <Routes>
            <Route path="/" element={authentificator? <Home/> : <Navigate to="/login"/>}/>
            <Route path="/login" element={authentificator? <Navigate to="/"/> : <Login/>}/>
            <Route path="/post/:name" element={authentificator? <Post/> : <Navigate to="/login"/>}/>
            <Route path= "/favourites" element={authentificator? <Favourites/> : <Navigate to="/login" />}/>
            <Route path="/stripe" element={<StripeComponent/>}/>
          </Routes>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;
