import "./App.css";
import { Fragment, useContext } from "react";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Management from "./pages/Management";
import BookDetail from "./pages/BookDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const messageLogout = "Look like you have logged out";

  return (
    <Fragment>
      <main>
        <div>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path="/login" exact>
                <LoginPage />
              </Route>
            )}
            {authCtx.isLoggedIn === true ? (
              <Route path="/home" exact>
                <Home />
              </Route>
            ) : (
              <ErrorPage link="/login" mess={messageLogout} />
            )}
            {authCtx.isLoggedIn === true ? (
              <Route path="/home/:bookId">
                <BookDetail />
              </Route>
            ) : (
              <ErrorPage link="/login" mess={messageLogout} />
            )}
            {authCtx.isLoggedIn === true ? (
              <Route path="/manage">
                <Management />
              </Route>
            ) : (
              <ErrorPage link="/login" mess={messageLogout} />
            )}
            {authCtx.isLoggedIn === true ? (
              <Route path="/upload">
                <Upload />
              </Route>
            ) : (
              <ErrorPage link="/login" mess={messageLogout} />
            )}
          </Switch>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
