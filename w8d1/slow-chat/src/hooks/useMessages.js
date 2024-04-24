import { useEffect, useState } from "react";
import axios from "axios";
import { messages as initialMessages } from "../data/messages";
import { users as initialUsers } from "../data/users";
import { parseMessage } from "../helpers/messageHelpers";

export default function useMessages() {
  const [messages, setMessages] = useState(null);
  const [users, setUsers] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then(setUsers);
    axios
      .get("/api/messages")
      .then((res) => res.data)
      .then(setMessages);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get("/api/messages")
      .then((res) => res.data)
      .then(setMessages);
    },1000)

    return () => clearInterval(intervalId)
  })

  const parsedMessages = messages && users && messages.map((message) =>
    parseMessage(message, users, currentUserId)
  );

  const addNewMessage = (formData) => {
    const { content } = formData;

    const newMessage = {
      content,
      datePosted: "",
      userId: currentUserId,
    };

    axios
      .post("/api/messages", newMessage)
      .then((res) => res.data)
      .then((message) => setMessages([...messages, message]))
      .catch((err) => console.log(err));
  };

  const setUserId = (formData) => setCurrentUserId(Number(formData.userId));

  return {
    messages: parsedMessages,
    users,
    currentUserId,
    addNewMessage,
    setUserId,
  };
}
