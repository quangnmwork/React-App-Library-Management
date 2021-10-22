import ReadOnlyRow from "./TableRow/ReadOnlyRow";
import useFecthAll from "../../hooks/useFetchAll";
import styles from './Table.module.css';
import Loading from '../Loading';
import { Fragment ,useState,useEffect} from "react";
import deleteBook from "../../utils/deleteBook";
import editBook from "../../utils/editBooks";
const Table = () => {
    const [data,isLoading] =useFecthAll('https://thefour123.herokuapp.com/books');
    const [listBook,setListBook] = useState([]);
    useEffect(() => {
      setListBook(data);
    },[data]);
    const handleIdDelete = (id) => {
      const newListBook = listBook.filter((book) => {return book._id !== id})
      setListBook(newListBook);
      deleteBook(id);    
    }
    const handleIdEdit = (id) => {
      //console.log(id)
    }
    const handleDataEdit = (id,bookUpdate) =>{
     // console.log(bookUpdate,id);
      const bookUpdateIndex= listBook.findIndex(book => {return book._id === id});
      Object.assign(listBook[bookUpdateIndex],bookUpdate);
      editBook(id,bookUpdate);
    }
    
    const listBooksRow = listBook.map((book) => (
            <ReadOnlyRow  key={book._id} data = {book} sendID = {handleIdDelete} 
                sendDataToEdit={handleDataEdit} sendIDToEdit={handleIdEdit}/>
        ))
    ;
    const tableForm = (<form className={styles.form}>
        <table>
            <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Available</th>
                    <th>Category</th>
                    <th>Image URL</th>
                    <th>Description</th>
                    <th>Stars</th>
                    <th>Pages</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listBooksRow}
            </tbody>
        </table>
    </form>);

    return (
        <Fragment>
            {!isLoading?tableForm:<Loading/>}
        </Fragment>
    )
}
export default Table ; 