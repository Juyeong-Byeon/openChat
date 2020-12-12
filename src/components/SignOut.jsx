import React from 'react';
import styled from 'styled-components';

const SignOutButton=styled.button`
background-color:rgba(0,0,0,0);
border-width:0;
cursor:pointer;
color:white;
width:100%;
`;
export default function SignOut({auth}) {
  return (
    <SignOutButton onClick={()=>auth.signOut()}>
      Sign Out
    </SignOutButton>
  )
}
