import cookie from "react-cookies";
import logoutHelper from "../Helpers/logoutHelper";
import {useNavigate} from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  logoutHelper()
    .then((data) => {
        console.log(data);
        cookie.remove("x-auth-token");
        cookie.remove("user");        
        window.location.reload(false);
    })
  }

export default Logout;
