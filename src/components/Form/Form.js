import styles from "./Form.module.css";
import { useRef, useState } from "react";
import convertDataToBook from "../../utils/convertDataToBook";
import addBook from "../../utils/addBooks";
import ModalUpLoad from "../UI/ModalUpload";
import useModal from "../../hooks/useModal";
const Form = () => {
  const { isShowing, toggle } = useModal();
  const bookName = useRef("");
  const author = useRef("");
  const bookID = useRef("");
  const imgURL = useRef("");
  const availale = useRef("");
  const category = useRef("");
  const descript = useRef("");
  const stars = useRef("");
  const numberPages = useRef("");
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let dataArray = [];

    const bName = bookName.current.value;
    dataArray.push(bName);
    const bAuthor = author.current.value;
    dataArray.push(bAuthor);
    const bID = bookID.current.value;
    dataArray.push(bID);
    const bImg = imgURL.current.value;
    dataArray.push(bImg);
    const bAvail = availale.current.value;
    dataArray.push(bAvail);
    const bCategory = category.current.value;
    dataArray.push(bCategory);
    const bDescript = descript.current.value;
    dataArray.push(bDescript);
    const bStars = stars.current.value;
    dataArray.push(bStars);
    const bPages = numberPages.current.value;
    dataArray.push(bPages);
    const newBooks = convertDataToBook(
      bName,
      bAuthor,
      bID,
      bImg,
      parseInt(bAvail),
      bCategory,
      bDescript,
      parseFloat(bStars),
      parseInt(bPages)
    );
    if (dataArray.some((text) => text.trim().length === 0)) {
      setError(true);
      setAlert("Please enter full information");
    } else {
      addBook(newBooks);
      setAlert("");
      setError(false);
    }
    toggle();
    console.log(newBooks);
  };
  return (
    <div className={styles.divform}>
      <form className={styles.form}>
        <h1>Upload new book</h1>
        <label htmlFor="bname">Book name</label>
        <input
          type="text"
          id="fname"
          placeholder="Book name.."
          ref={bookName}
        />

        <label htmlFor="author">Author</label>
        <input type="text" id="author" placeholder="Author.." ref={author} />

        <label htmlFor="bookid">Book ID</label>
        <input type="text" id="bookid" placeholder="Book ID.." ref={bookID} />

        <label htmlFor="img">Image URL</label>
        <input type="text" id="img" placeholder="Image URL.." ref={imgURL} />

        <label htmlFor="available">Available</label>
        <input
          type="text"
          id="available"
          placeholder="Number books.."
          ref={availale}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          placeholder="Category.."
          ref={category}
        />

        <label htmlFor="descript">Description</label>
        <textarea
          type="text"
          id="descript"
          className
          placeholder="Description.."
          ref={descript}
        />

        <label htmlFor="star">Stars</label>
        <input type="text" id="star" ref={stars} />

        <label htmlFor="numberPages">Number of pages</label>
        <input type="text" id="numberPages" ref={numberPages} />

        <div>
          <button onClick={submitHandler}>Upload</button>
          {/* <button>Clear</button> */}
        </div>
        <ModalUpLoad isShowing={isShowing} hide={toggle} success={!error} />
      </form>
    </div>
  );
};
export default Form;
