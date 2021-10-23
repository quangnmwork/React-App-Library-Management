
import styles from './FormLogin.module.css';
import { useRef,useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';
const FormLogin = () => {
  const enterUsername = useRef(''); 
  const history = useHistory();
  const enterPassword = useRef('');
  const [validate,setValidate] = useState(true);
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  
  const login_url = 'https://thefour123.herokuapp.com/users/login';
  const user_url = 'https://thefour123.herokuapp.com/users';
  const submitHandler  = (e) => {
    e.preventDefault();
    const username = enterUsername.current.value ; 
    const password = enterPassword.current.value ;
    console.log(username,password)
    const user = {
      "userName":username,
      "password":password,
    }
    setIsLoading(true);
    const LoginHandler = async () => {
        try {
          const res = await  fetch(login_url,{method:'POST',
            body:JSON.stringify(user),
            headers:{
              'Content-type':'application/json'
            }
          });
          if(!res.ok) {
            throw new Error('Fail login');
          }
          const data =await res.json();
          authCtx.login(data.token);
    
          return data.token;
        } catch(error) {
          console.log(error);
        }

    }
    const getUser = async () => {
      try{
        const token = await LoginHandler();
        console.log(token)
        if(typeof token !== 'undefined' ){
          const res = await fetch(user_url,{
            method:'GET',
            headers:{
              "authorization": `Bearer ${token}`
          }});
          const data =await res.json();
          console.log(data)
          history.push('/home');
        }
        
      }catch (error){
        console.log(error);
      }
    }
    getUser();
    
  }

  return (
    <div className={styles.container}>
      <div className = {styles.formContainer}>
        <form className={styles.form}>
          <h1>Welcome to Library</h1>
          <input type="text" placeholder="Username" ref={enterUsername}/>
          <input type="text" placeholder="Password" ref={enterPassword}/>
          <button onClick ={submitHandler}>Login</button>
          {/* {validate?null:<p className={styles.error}>Username or password is wrong</p>} */}
        </form>
      </div>
    </div>
  )
}
export default FormLogin;

