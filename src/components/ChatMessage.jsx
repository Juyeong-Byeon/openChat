import React from 'react'
import styled from 'styled-components';

const Message=styled.div`
display:flex;
.message{
  margin:1rem 0 ;
  width:wrap-content;
  height:wrap-content;
  display:flex;
  flex-direction:row;
  img{
    margin:auto 20px;
    width:50px;
    border-radius:30px;
  }
  .message_wrapper{
    display:flex;
    flex-direction:column;
    .message_content{
      width:100%;
      height:wrap-content;
      color:white;
      display:flex;
      align-items:flex-start;
      font-size:1.25rem;
      word-break:keep-all;
      margin-bottom:0.1rem;
    }
    .message_sent{
      font-size:0.5rem;
      color:#22CC88;
      margin-bottom:1rem;
    }
  }
}

  &.sent{
   justify-content:flex-end;
   .message{
    flex-direction:row-reverse;
      .message_content{
        justify-content:flex-end;
      }
      .message_sent{
        text-align:right;
      }
   }
   
  }
  &.received{
    justify-content:flex-start;
    .message{
      .message_content{
        justify-content:flex-start;
      }
      .message_sent{
        text-align:left;
      }
    }
  }
`

export default function ChatMessage({message,auth}) {
  
  const {text,uid,photoURL,createdAt}=message;
  const messageClass=uid===auth.currentUser.uid?'sent':'received';
  const date=createdAt.toDate().toLocaleTimeString(navigator.language,{hour:'2-digit',minute:'2-digit'});

  return (
    <Message className={`${messageClass}`}>
      <div  className={`message`}>
        <img src={photoURL}></img>
        <div className='message_wrapper'>
          <p className='message_content'>{text}</p>
          <time className='message_sent'>{date}</time>
        </div>
      </div>
    </Message>
  )
}
