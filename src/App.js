
import './App.css';
import {Fragment,useContext} from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Management from './pages/Management';
import BookDetail from './pages/BookDetail';
import {Route,Switch,Redirect} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import AuthContext from './components/store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  
  
  return (
    <Fragment>
      
      <main>
        <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/login'/>
          </Route>
          <Route path='/login' exact>
            <LoginPage/>
          </Route>
          {authCtx.isLoggedIn&&<Route path = '/home' exact>
            <Home/>
          </Route>}
          {authCtx.isLoggedIn&&<Route path='/home/:bookId'>
          <BookDetail/>
            </Route>}
          {authCtx.isLoggedIn&&<Route path='/manage'>
            <Management/>
          </Route>}
          {authCtx.isLoggedIn&&<Route path='/upload'>
            <Upload/>
          </Route>}
        </Switch>
        </div>
        
      </main>
      
    </Fragment>
    
  );
}

export default App;
