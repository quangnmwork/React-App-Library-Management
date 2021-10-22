import CardBook from "../CardBook/CardBook";
import styles from "./CardBookGrid.module.css"
const CardBookGrid = (props) => {
    let listBooks = <p>Loading ....</p>
    if(props.listData != null) {
        listBooks = props.listData.map((book) =>  (
            <CardBook id={book._id} key={book._id} img = {book.img} bookName= {book.bookName}></CardBook>));
    }

    return (
        <div className = {styles.cardBookGrid}>
            {listBooks}
        </div>
    )
}
export default CardBookGrid;