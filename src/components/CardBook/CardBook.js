import React, { useState, Fragment } from "react";
import styles from "./CardBook.module.css";
import useFecthAll from "../../hooks/useFetchAll";

import { useHistory, useRouteMatch } from "react-router-dom";
const CardBook = (props) => {
  const [data, isLoading] = useFecthAll(
    "https://thefour123.herokuapp.com/v1/books"
  );
  let { __, url } = useRouteMatch();

  let history = useHistory();
  const detailsHandler = () => {
    const book = data.filter((book) => {
      return book._id === props.id;
    });
    console.log(book[0]._id);
    console.log(url + `/${book[0]._id}`);
    history.push(url + `/${book[0]._id}`);
  };

  return (
    <Fragment>
      {!isLoading ? (
        <div className={styles.card}>
          <img src={props.img} alt={props.bookName}></img>
          <div className={styles.cardHeading}>{props.bookName}</div>
          <div className={styles.cardDetail} onClick={detailsHandler}>
            Detail
          </div>
        </div>
      ) : (
        <div className={styles.loadingDiv}></div>
      )}
    </Fragment>
  );
};
export default CardBook;
