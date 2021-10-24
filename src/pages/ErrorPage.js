import Error from "../components/Error/Error"
const ErrorPage = (props) => {
    return (
      <Error link = {props.link} mess={props.mess}/>
    )
}
export default ErrorPage;