
import './App.css';
import {Fragment} from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Management from './pages/Management';
import BookDetail from './pages/BookDetail';
import {Route,Switch,Redirect} from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <header>
        <Sidebar/>
      </header>
      <main>
        <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          <Route path = '/home' exact>
            <Home/>
          </Route>
          <Route path='/home/:bookId'>
            <BookDetail/>
          </Route>
          <Route path='/manage'>
            <Management/>
          </Route>
          <Route path='/upload'>
            <Upload/>
          </Route>
        </Switch>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
