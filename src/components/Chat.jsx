import { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import '../styles/Chat.css'

export const Chat = (props) =>
{
  const { room } = props

  const [newMessage, setNewMessage] = useState("")
  const [ messages, setMessages ]  = useState([])

  const messagesRef = collection(db, "messages")

  // useEffect(() => {
  //   const queryMessages = query(
  //     messagesRef, 
  //     where("room", "==", room),
  //     orderBy("createdAt")
  //   )
    
  //   const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
  //     let messages = []
  //     snapshot.forEach((doc) => {
  //       messages.push({...doc.data(), id: doc.id })
  //     })
  //     setMessages(messages)
  //   })
  //   return () => unsubscribe()
  // }, [])

   // useEffect(() => {
  //   const queryMessages = query(
  //     messagesRef, 
  //     where("room", "==", room),
  //     orderBy("createdAt")
  //   )
    
  //   const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
  //     let messages = []
  //     snapshot.forEach((doc) => {
  //       messages.push({...doc.data(), id: doc.id })
  //     })
  //     setMessages(messages)
  //   })
  //   return () => unsubscribe()
  // }, [])



  // const handleSubmit = async (e) => 
  // {
  //   e.preventDefault()
  //   if ( newName === "") return
  //   const result = await addDoc(messagesRef, {
  //     name: newName,
  //     createdAt: serverTimestamp(),
  //     room: "fuck you",
  //   })
  //   setNewName("")
  //   console.log("fuck you", result)
  // }

  const handleSubmit = async (e) => 
  {
    e.preventDefault()
    if ( newMessage === "") return
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    })
    // TODO add error logic
    setNewMessage("")
    // console.log('ATM', result)
  }

  return <div className="chat-app">
    <div className="header">welcome to: {room}</div>
    <div className="messages">
      {messages.map((message) => (
      <div className="message" key={message.id} >
        <span className="user">{message.user}</span>
        {message.text}
      </div>
      ))}
    </div>
    <form onSubmit={handleSubmit} className="new-message-form">
      <input 
        className="new-message-input" 
        placeholder="Type your message here..."
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        />  
      <button type="submit" className="send-button"> send </button>
    </form>
  </div>
}