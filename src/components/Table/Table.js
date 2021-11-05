import ReadOnlyRow from "./TableRow/ReadOnlyRow";
import useFecthAll from "../../hooks/useFetchAll";
import styles from "./Table.module.css";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";
import { Fragment, useState, useEffect } from "react";
import deleteBook from "../../utils/deleteBook";
import editBook from "../../utils/editBooks";
const Table = () => {
  const [data, isLoading] = useFecthAll(
    "https://thefour123.herokuapp.com/books"
  );
  const [listBook, setListBook] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [input, setInput] = useState("");
  const inputHandle = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setListBook(data);
    setCurrentItems(data.slice(itemOffset, itemOffset + 7));
    setPageCount(Math.ceil(data.length / 7));
  }, [data]);
  // useEffect(() => {
  //   const endOffset = itemOffset + 7;
  //   // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(data.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(data.length / 7));
  // }, [itemOffset, 7]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 7) % listBook.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  const handleIdDelete = (id) => {
    const newListBook = listBook.filter((book) => {
      return book._id !== id;
    });
    setListBook(newListBook);
    deleteBook(id);
  };

  const handleDataEdit = (id, bookUpdate) => {
    // console.log(bookUpdate,id);
    const bookUpdateIndex = listBook.findIndex((book) => {
      return book._id === id;
    });
    Object.assign(listBook[bookUpdateIndex], bookUpdate);
    editBook(id, bookUpdate);
  };

  const listBooksRow = listBook
    .slice(itemOffset, itemOffset + 7)
    .map(
      (book) =>
        book.bookName.includes(input) && (
          <ReadOnlyRow
            key={book._id}
            data={book}
            sendID={handleIdDelete}
            sendDataToEdit={handleDataEdit}
          />
        )
    );

  const listBooksRowPanigtation = (
    <>
      <tbody>{listBooksRow}</tbody>
    </>
  );
  const tableForm = (
    <>
      <form className={styles.form}>
        <div className={styles.search}>
          <input
            placeholder="Searching...."
            value={input}
            onChange={inputHandle}
          />
          <button>Search</button>
        </div>
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

          {listBooksRowPanigtation}
        </table>
      </form>
      <div>
        <ReactPaginate
          className={styles.page}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );

  return <Fragment>{!isLoading ? tableForm : <Loading />}</Fragment>;
};
export default Table;
