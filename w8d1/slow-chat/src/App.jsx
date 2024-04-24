import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import UserForm from "./components/UserForm";

import "./App.scss";
import useMessages from "./hooks/useMessages";

function App() {
  const { messages, users, currentUserId, addNewMessage, setUserId } = useMessages();

  return (
    <>
      <Header />
      {currentUserId && (
        <main>
          <MessageList messages={messages} />
          <MessageForm onSubmit={addNewMessage} />
        </main>
      )}
      {!currentUserId && <UserForm users={users} onSubmit={setUserId} />}
    </>
  );
}

export default App;
