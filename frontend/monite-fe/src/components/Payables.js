import { MoniteSDK } from '@monite/sdk-api';
import { Payables, MoniteProvider } from '@monite/sdk-react';

// Define a function that retrieves access tokens
const fetchToken = async () => {
  const response = await fetch('https://api.sandbox.monite.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-monite-version': '2023-09-01' //Monite API version
    },
    body: JSON.stringify({
      grant_type: 'entity_user',
      client_id: 'SECRET_CLIENT_ID',
      client_secret: 'SECRET_CLIENT_SECRET',
      entity_user_id: 'SECRET_ENTITY_USER_ID'
    })
  });

  return await response.json();
}

// Initialize the SDK
const monite = new MoniteSDK({
  apiUrl: 'https://api.sandbox.monite.com/v1', // Or 'https://api.monite.com/v1' to use Production
  entityId: 'ENTITY_ID',
  fetchToken: fetchToken
});

function App() {
  return (
    <MoniteProvider monite={monite} locale={{ code: "en-US" }}>
    	<Payables />
    </MoniteProvider>
  );
}

export default App;