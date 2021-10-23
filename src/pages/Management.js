import Table from "../components/Table/Table";
import AuthContext from '../components/store/auth-context';
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
const Management = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn)
    return (
        <div>
          <header>
          <Sidebar isLoggedIn={authCtx.isLoggedIn}/>
        </header>
            <Table/>
         
        </div>
    )
}
export default Management;