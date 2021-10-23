import Form from "../components/Form/Form";
import { Fragment,useContext } from "react";
import AuthContext from '../components/store/auth-context';
import Sidebar from "../components/Sidebar";
const Upload = () => {
    const authCtx = useContext(AuthContext);
    return (
       <Fragment>
         <header>
          <Sidebar isLoggedIn={authCtx.isLoggedIn}/>
        </header>
         <Form/>
       </Fragment>
    )
}
export default Upload;