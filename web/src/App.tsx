import React, { useState } from 'react';
import { MessageServiceClient } from 'lib/api/messages/v1/Message_serviceServiceClientPb';
import { CreateMessageRequest } from 'lib/api/messages/v1/message_service_pb';

function App() {
  const [count, setCount] = useState(0);

  const client = new MessageServiceClient('http://localhost:8080')

  const newMessage = async (content: string) => {
    const request = new CreateMessageRequest();
    request.setContent(content);
    const response = await client.createMessage(request, null);
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            Click me : {count}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
