import styles from './Error.module.css';
import { Link } from 'react-router-dom';
const Error = (props) => {
  return (<div className={styles.container}>
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>404 Not found</h1>
      <p className={styles.notify}>Oops!{props.mess} . <Link className={styles.name} to={props.link}>Click here</Link> to return your page .
       </p>
    </div>
  </div>)
}
export default Error ;