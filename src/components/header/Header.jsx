import React from 'react';
import styled from 'styled-components';
import SignOut from '../SignOut';
import SignIn from '../SignIn';

const HeaderTag=styled.header`
  
  width:100%;
  height:10%;
  background-color:#383A42;
  color:white;
  display:flex;
  justify-content:space-between;
  h1{
    margin:0 0 0 1.5rem;
    padding:0.5rem;
    font-size:3rem;
    color: #22CC88;

  }
  .login_section{
    margin-top:2rem;
    height:100%;
    width:30%;
  }
`

const Header = ({user,auth,firebase}) => {
  
  return (
    <HeaderTag>
      <h1>Open Chat</h1>
      <div className="login_section">
        {user?<SignOut auth={auth} />:<SignIn auth={auth} firebase={firebase}/>}
      </div>
    </HeaderTag>
  );
}

export default Header;
