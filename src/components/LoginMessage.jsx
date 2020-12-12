import React from 'react';
import styled from 'styled-components';

const LoginSection=styled.div`
width:100%;
height:90vh;
overflow-y:hidden;
overflow-x:hidden;
background-color:#25282F;
h1{
  text-align:center;
  margin-top:25%;
  color:white;
  cursor:pointer;
}

`

const LoginMessage = ({auth,firebase}) => {
  const signInWithGoogle=()=>{
    const providor=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(providor);
  }
  return (
    <LoginSection>
      <h1 onClick={signInWithGoogle}>
        sign in with Google
      </h1>
    </LoginSection>
  );
}

export default LoginMessage;
