import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route ,Switch} from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
import Headof from './component/Headof';
import Home from './component/Home'
import Capsules from './component/Capsules'
import Cores from './component/Cores'
import Footer from './component/Footer'
import Login from './component/Login'
import Dragons from './component/Dragons';
import Info from './component/Info'
import LandingPads from './component/LandingPads';
import PayLoads from './component/PayLoads'
import Roadster from './component/Roadster';



function App() {
  return (
    <>
     
     
     <Headof/>
     {/* <Home/>
     <About/>
     <Contact/> */}

     
    
     
    <Switch>

      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Capsules' component={Capsules} ></Route>
      <Route exact path='/Cores' component={Cores} ></Route>
      <Route exact path='/Dragons' component={Dragons} ></Route>
      <Route exact path='/Info' component={Info} ></Route>
      <Route exact path='/LandingPads' component={LandingPads} ></Route>
      <Route exact path='/PayLoads' component={PayLoads} ></Route>
      <Route exact path='/Roadster' component={Roadster} ></Route>
      <Route exact path='/Login' component={Login} ></Route>
    
    </Switch>

     <Footer/>

    </>
  );
}

export default App;


  {/* <Route exact path='/Register' >
        <AuthProvider>
          <Register/>
        </AuthProvider>
      </Route>
      */}
