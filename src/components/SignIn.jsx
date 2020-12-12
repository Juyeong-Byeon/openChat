import React from 'react';
import styled from 'styled-components';

const SignInButton=styled.button`
background-color:rgba(0,0,0,0);
border-width:0;
cursor:pointer;
color:white;
width:10rem;
`;



export default function SignIn({auth,firebase}) {
  const signInWithGoogle=()=>{
    const providor=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(providor);
  }
  return (
    <SignInButton onClick={signInWithGoogle}>
      Sign In With Google
    </SignInButton>
  )
}
