import React from 'react';
import styles from './ReadOnlyRow.module.css';
import { useState,Fragment,useRef} from 'react';
import convertDataToBook from '../../../utils/convertDataToBook';
const ReadOnlyRow = props => {
  const bookName = useRef('');
  const author = useRef('');
  const imgURL = useRef('');
  const availale = useRef('');
  const category = useRef('');
  const descript = useRef('');
  const stars = useRef('');
  const numberPages = useRef('');
  const [isEditText,setIsEditText] = useState('Edit');
  const [isEdit,setIsEdit] = useState(false);
  const getDataUpdate = (bID) => {
    const bName= bookName.current.value ; 
    const bAuthor = author.current.value ; 
    const bImg = imgURL.current.value ; 
    const bAvail = availale.current.value ; 
    const bCategory = category.current.value;
    const bDescript = descript.current.value;
    const bStars = stars.current.value ; 
    const bPages = numberPages.current.value ;
    const newBooks = convertDataToBook(bName,bAuthor,bID,bImg,parseInt(bAvail),bCategory,bDescript,parseFloat(bStars),parseInt(bPages));
    return newBooks;
  }
  const editRow = () => {
    setIsEditText((prevState) => {return prevState==='Edit'?'Save':'Edit'});
    setIsEdit(isEditText==='Edit'?true:false);
    props.sendIDToEdit(props.data._id);
    if(isEditText==='Save'){
      const newBooks = getDataUpdate(props.data.bookId);
      props.sendDataToEdit(props.data._id,newBooks);
    }
  }
  const deleteRow = () => {
    props.sendID(props.data._id);
  }
  console.log(isEdit,isEditText)
  const dataRow = (
    <Fragment>
      {isEdit?<td ><span><input
          type="text"
          required="required"
          defaultValue={props.data.bookName}
          ref={bookName}
        ></input></span></td>:<td><span>{props.data.bookName}</span></td>}
      {isEdit?<td>
        <input
          type="text"
          contentEditable
          required="required"
          defaultValue={props.data.author}
          ref={author}
        ></input>
      </td>:<td>{props.data.author}</td>}
      {isEdit?<td ><input
          type="text"
          required="required"
          ref = {availale}
          defaultValue={props.data.available}
        ></input></td>:<td>{props.data.available}</td>}
      {isEdit?<td ><input
          type="text"
          required="required"
          ref ={category}
          defaultValue={props.data.category}
        ></input></td>:<td>{props.data.category}</td>}
      {isEdit?<td ><input
          type="text"
          required="required"
          ref ={imgURL}
          defaultValue={props.data.img}
        ></input></td>:<td>{props.data.img}</td>}
      {isEdit?<td ><span><input
          type="text"
          required="required"
          ref = {descript}
          defaultValue={props.data.description}
        ></input></span></td>:<td><span>{props.data.description}</span></td>}
      {isEdit?<td ><input
          type="text"
          required="required"
          ref ={stars}
          defaultValue={props.data.star}
        ></input></td>:<td>{props.data.star}</td>}
      {isEdit?<td ><input
          type="text"
          required="required"
          ref={numberPages}
          defaultValue={props.data.numberOfPages}
        ></input></td>:<td>{props.data.numberOfPages}</td>}
    </Fragment>
  );
  return (
    <tr className={styles.tr}>
      {dataRow}
      <td className={styles.tdButton}>
        <button className={styles.btnEdit} type='button' onClick={editRow} >
          {isEditText}
        </button>
        <button type='button' className={styles.btnDelete} onClick = {deleteRow}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
