import { useEffect, useState } from 'react'
// import GoogleSheetsProvider from 'react-db-google-sheets';
import './App.css';
// import database from './firebase';
// import firebase from 'firebase';
// import database from 'react-db-google-sheets';


function App() {
  const[input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [username, setUsername] = useState('Guest');

   useEffect(async () =>  {
    const username = window.prompt("Enter a username");
    setUsername(username);
        
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();


    try{
      const response = 
      await
       fetch(
        "https://v1.nocodeapi.com/varshitha1707/google_sheets/BxcUhodDbNfyimiF?tabId=Sheet1",
        {
          method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify([[username,input, new Date().toLocaleString]])
        }
        );
        await response.json();
        setInput("");
        

    }catch(err){
      console.log(err)
    }
    // const okarin = {
    //   username: username,
    //   input: input,
    //   // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // }

    // // database.collection('messages')
    // .add(okarin)
   
  };

  console.log(input);

  useEffect(async () => {

    // database.collection('messages').orderBy('timestamp', 'desc')
    // onSnapshot((snapshot) => {
      setList(list.concat({
        username:username,
        input:username
      }))
    // }
    // )
  }, [])
  
  return (
    <div className ="app">
      <h1>GRAPEJUICE CHAT BOX :)</h1> 

    


      {/* {list.map(({ message, username: { input, timestamp, username } }) => ( */}

        <h3 key = {username} className = 'okarin'>
          {username}: 

        <h4 key = {username} className = 'varsh'>
        {input}</h4> </h3> 

          
      {/* ))} */}


      <form>
        <input value = {input} 
        onChange = {(event) => setInput(event.target.value)} /> 
        <button onClick={sendMessage} type = "submit">Send</button>
      </form>
      
    </div>
  );
}

export default App;
