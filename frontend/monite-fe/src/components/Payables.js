import { MoniteSDK } from '@monite/sdk-api';
import { Dialog, Payables, PayableDetails, PayablesTable, MoniteProvider, ApprovalPolicies } from '@monite/sdk-react';

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
      client_id: '496cd9b2-10e3-4f20-9465-7df9968af303',
      client_secret: 'd8000356-1268-4bef-8982-c42852e02a94',
      entity_user_id: '9c07382a-0a2b-41a8-961a-9630c118bc89'
    })
  });

  return await response.json();
}

// Initialize the SDK
const monite = new MoniteSDK({
  apiUrl: 'https://api.sandbox.monite.com/v1', // Or 'https://api.monite.com/v1' to use Production
  entityId: '20521b3d-7d0c-4cb2-9021-bee7eb6855fe',
  fetchToken: fetchToken
});

function App() {
  return (
    <MoniteProvider monite={monite} locale={{ code: "en-US" }}>
      <ApprovalPolicies />
      <Payables />
    </MoniteProvider>
  );
}

export default App;