
import {Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Userpage from './pages/Userpage';
import Menu from './pages/Menu';






export default function App (){
  
      return(
        <Routes>
          <Route path='/home'Component={Home}/>
          <Route path='/Menu'Component={Menu}/>
          <Route path='/Userpage'Component={Userpage}/>
         
          <Route path='/'Component={Login}/>
         
        </Routes>
      );
   
    }
  



