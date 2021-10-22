import CardBookGrid from "../components/Layout/CardBookGrid";
import { Fragment ,useState} from "react";
import useFecthAll from "../hooks/useFetchAll";
import Loading from "../components/Loading";
import styles from './Home.module.css';
const Home = () => {
    
    const [data,isLoading] =  useFecthAll('https://thefour123.herokuapp.com/books');
    
    
    return (
        <div className={styles.home}>
            {!isLoading ?  <CardBookGrid  listData = {data}/>:<Loading/>}
           
        </div>
    );
}
export default Home ; 