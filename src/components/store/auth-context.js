import React from 'react';
const AuthContext =React.createContext({
    token:'',
    isLoggedIn:false , 
    login:(token) => {},
    logout:() => {},
})
export const AuthProvider = (props) =>{
    const initalToken = localStorage.getItem('token');
    console.log(initalToken)
    const [token,setToken] = React.useState(initalToken);
    const userIsLoggedIn = !!token;
    //localStorage.getItem('token') !== null;
    const loginHandler = (token) => {
        setToken(token);
       // setToken(localStorage.setItem('token',token));
    } 
    const logoutHandler = () => {
        setToken(null); 
        localStorage.removeItem('token');
    }
    const contextValue = {
        token:token , 
        isLoggedIn:userIsLoggedIn, 
        login:loginHandler , 
        logout:logoutHandler ,

    }
    return(
        <AuthContext.Provider value = {contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;