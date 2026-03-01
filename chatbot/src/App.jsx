import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import "./App.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  const saveInputText = (e) => {
    setInputText(e.target.value);
  };

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="robot.png" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="user.png" className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        ))}
      </div>
    </>
  );
}
function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
