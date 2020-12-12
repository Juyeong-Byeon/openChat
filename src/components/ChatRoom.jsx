import React,{useState,useRef} from 'react';
import ChatMessage from './ChatMessage';
import styled from 'styled-components';

const ChatSection=styled.div`
width:100%;
height:90vh;
overflow-y:hidden;
overflow-x:hidden;
background-color:#25282F;
.messages{
  height:90%;
  overflow-y:scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
}
`

const ChatForm=styled.form`
  width:100%;
  height:8%;
  display:flex;
  margin:2% 0 0 0;
  padding:0;
  border-width: 1px 0 0px 1px;
  border-style:solid;
  .chat_input{
    width:80%;
    height:100%;
    margin:0;
    padding:0 0 0 1rem;
    font-size:1.2rem;
    border:none;
  }
  .submit_button{
    width:20%;
    height:100%;
    margin:0px;
    padding:0;
    border:0px;
    color:white;
    background-color:#22CC88;
    font-size:1rem;
    cursor:pointer;
  }

`;

export default function ChatRoom({messages,auth,messagesRef}) {
 const [formValue, setFormValue] = useState('');
 const ref = useRef();

  const sendMessage=async(e)=>{
    e.preventDefault();
    if(formValue.length<1)return;

    const {uid,photoURL}=auth.currentUser;
    await messagesRef.add({
      text:formValue,
      createdAt:new Date(),
      uid,
      photoURL
    });
    ref.current.scrollIntoView({behavior:'smooth'});
    setFormValue('');
    
  }

  const formValueUpdated=({target})=>{
    if(target.value.length<50)
    setFormValue(target.value)
  }

  return (
    <ChatSection>
      <div className='messages'>
      {messages&&messages.map((message)=><ChatMessage key={message.id} message={message} auth={auth}/>).reverse()}
      <div ref={ref} ></div>
      </div>
    
      <ChatForm>
        <input className='chat_input' value={formValue} onChange={formValueUpdated} />
        <button  className='submit_button' type="submit" onClick={sendMessage}>전송</button>
      </ChatForm>
     
    </ChatSection>
  )
}
