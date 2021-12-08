import cookie from "react-cookies";
import Aside from "../components/aside/Aside";
import logoutHelper from "../Helpers/logoutHelper";

function logout() {
  logoutHelper()
    .then((data) => {
                console.log(data);
                cookie.remove("x-auth-token");
                cookie.remove("user");
                window.location.reload(false);
    })
  }

export default logout;
