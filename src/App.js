


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import ChatRoom from './components/ChatRoom';
import Header from './components/header/Header';
import LoginMessage from './components/LoginMessage';
import styled from 'styled-components';

import firebaseConfig from './secure/firebaseConfig';




const config=firebaseConfig();
const firebaseApp=firebase.initializeApp(config);
const auth=firebaseApp.auth();
const firestore=firebaseApp.firestore();



const OpenChat=styled.section`
  width:40%;
  min-width:620px;
  height:100%;
  margin:0 auto;
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
  font-family: 'Black Han Sans', sans-serif;
`;

const messagesRef=firestore.collection('messages');



function App() {

  let query=messagesRef.orderBy('createdAt','desc').limit(25);
  const [messages]=useCollectionData(query,{idField:'id'});
  const [user]=useAuthState(auth);

  
 
  return (
    <OpenChat>
    <Header user={user} auth={auth} firebase={firebase}/>
      {
      user?
      <ChatRoom messages={messages} auth={auth} firebaseApp={firebaseApp} messagesRef={messagesRef}/>
      :<LoginMessage auth={auth}  firebase={firebase}/>
      }
    </OpenChat>
  );
}

export default App;
