import React, { useContext } from "react";
import "./Header.css";
import Cartbutton from "./Cartbutton";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../Authentication/AuthContext";



const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logOutHandler = () => {
    authCtx.logout();
    authCtx.items = [];
    localStorage.removeItem("tokenid");
    localStorage.removeItem("emailid");
    history.replace("/")
  }
  return (
    <div className="row">
      <div className="col-12 ">
        <div id="header">
          <div className="header-left">
            <NavLink id="btn" className="btn btn-link" to="/home">
              HOME
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/store">
              STORE
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/contact">
              Contact Us
            </NavLink>
          </div>
          {authCtx.isLoggedIn && <li>
            <button className={"header-but"} id="btn" onClick={logOutHandler}>Logout</button>
          </li>}
          <div className="header-right">
            <Cartbutton onshowing={props.onshow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
