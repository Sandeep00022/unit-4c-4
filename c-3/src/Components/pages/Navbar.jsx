import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import style from "styled-components"

const NavStyle=styled.div`

display:flex;
justify-content:center;

gap:20px;
background-color:pink;

padding:30px;

font-size:30px;

font-weight:800;

`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <NavStyle>
        {/* keep all the NavLinks here */}
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="about">About</Link>
        </div>
        <div>
          <Link to="books">Books</Link>
        </div>
        <div>
          <Link to="login">Login</Link>
        </div>
        
      </NavStyle>
    </>
  );
};
