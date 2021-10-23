
import styles from './BookDetail.module.css';
import useFecthAll from "../hooks/useFetchAll";
import {useParams} from 'react-router-dom';
import Loading from "../components/Loading";
import {Fragment} from 'react';
import { useContext } from "react";
import AuthContext from '../components/store/auth-context';
import Sidebar from '../components/Sidebar';
const BookDetail = () => {
  const params = useParams();
  const [data,isLoading] =  useFecthAll(`https://thefour123.herokuapp.com/books/${params['bookId']}`);
  const authCtx = useContext(AuthContext);
  console.log(data);
  const bookDetail = (
    <div className= {styles.bookContainer}>
      <div className={styles.topDetail}>
        <div className ={styles.imgContainer} > 
          <img className ={styles.img} src={data[6]} alt='Book image'></img>
        </div>
        <div className={styles.topDetailright}>
          <p className={styles.heading}>Book Name:</p>
          <p className={styles.secondary}>{data[2]}</p>
          <p className={styles.heading}>Author:</p>
          <p className={styles.secondary}>{data[3]}</p>
          <p className={styles.heading}>Category:</p>
          <p className={styles.secondary}>{data[5]}</p>
          <p className={styles.heading}>Stars:</p>
          <p className={styles.secondary}>{data[7]}</p>
          <p className={styles.heading}>Pages:</p>
          <p className={styles.secondary}>{data[8]}</p>
        </div>
      </div>
      <div className={styles.bottomDetail}>
        <p>Description</p>
        {data[9]}
      </div>
    </div>
  );
  return(
    <Fragment>
      {authCtx.isLoggedIn?<Sidebar></Sidebar>:null}
      {!isLoading?bookDetail:<Loading/>}
    </Fragment>
  )
}
export default BookDetail;