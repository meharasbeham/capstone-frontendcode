
import {Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Userpage from './pages/Userpage';
import Menu from './pages/Menu';
import Sigin from './pages/Sigin';





export default function App (){
  
      return(
        <Routes>
          <Route path='/home'Component={Home}/>
          <Route path='/Menu'Component={Menu}/>
          <Route path='/Userpage'Component={Userpage}/>
          <Route path='/signin'Component={Sigin}/>
          <Route path='/'Component={Login}/>
         
        </Routes>
      );
   
    }
  



