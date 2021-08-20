import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from './components/myform';
import Login from './components/login';
import SignUp from './components/signup';
import Wallet from './components/wallet';
import Reciever from './components/reciever';
import WalletDetails from './components/walletDetail';
import Logout from './components/logout';
import Menu from './components/menu';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import { Redirect } from 'react-router'


function App() {
  return (
    <Router>
      <div className="App">
      </div> 
      <Switch>
        <Route exact path='/reciever' component={Reciever}></Route>
        <Route exact path='/walletdetails' component={WalletDetails}></Route>
        <Route exact path='/wallet' component={Wallet}></Route>
        <Route exact path='/sendtoken' component={MyForm}></Route>
        <Route exact path='/logout' component={Logout}></Route>
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/signup' component={SignUp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
