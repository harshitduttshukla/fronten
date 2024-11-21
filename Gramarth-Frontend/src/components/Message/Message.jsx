import React, { useState } from 'react';

function Message() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the marketplace! How can we assist you?' },
    { id: 2, text: 'Check out our latest products!' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-900">
      <div className="max-w-xl mx-auto w-full flex-grow p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Messages</h2>
        <div className="mb-4 space-y-2">
          {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet. Start the conversation!</p>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="bg-gray-700 p-2 rounded text-white">
                {message.text}
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border border-gray-600 bg-gray-700 text-white rounded-l-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
