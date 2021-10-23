import CardBookGrid from "../components/Layout/CardBookGrid";
import { Fragment ,useState,useContext} from "react";
import useFecthAll from "../hooks/useFetchAll";
import Loading from "../components/Loading";
import styles from './Home.module.css';
import AuthContext from '../components/store/auth-context';
import Sidebar from "../components/Sidebar";
const Home = () => {
    
    const [data,isLoading] =  useFecthAll('https://thefour123.herokuapp.com/books');
    
    const authCtx = useContext(AuthContext);
     console.log(authCtx.isLoggedIn)
    return (
      <Fragment>
        <header>
        <Sidebar isLoggedIn={authCtx.isLoggedIn}/>
      </header>
          <div className={styles.home}>
              {!isLoading ?  <CardBookGrid  listData = {data}/>:<Loading/>}
            
          </div>
      </Fragment>
    );
}
export default Home ; 