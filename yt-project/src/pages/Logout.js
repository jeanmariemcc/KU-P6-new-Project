import cookie from "react-cookies";
import Aside from "../components/aside/Aside";

function logout() {
  let cookies = document.cookie.split("; ");
  let token = cookies
    .find((cookie) => {
      return cookie.includes("x-auth-token");
    })
    .split("=")[1];

  console.log(token);
  let resources = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: "",
  };
  return fetch("http://localhost:9999/atlas/users/logout", resources).then(
    (res) => {
      console.log(res.status);
      console.log(res.body);
      return res.json();
    }
  );
}

function Logout() {
  <Aside />
  return (
    <main className="logout">
      <div className="logout">
        <img
          className="logoutImg"
          src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/115/2016/06/03173421/figure7_2_1-e1464977654496.jpg"
          alt=""
        />
        <div className="logout">
          <h1 className="logout">Logout</h1>
        </div>
        <br />
        <div className="logout">
          <p>Are you sure you want to log out?</p>
        </div>
        <br />
        <div className="createFormGroup">
          <button
            className="logoutSubmit"
            onClick={() => {
              logout().then((data) => {
                console.log(data);
                cookie.remove("x-auth-token");
                cookie.remove("user");
              });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Logout;
