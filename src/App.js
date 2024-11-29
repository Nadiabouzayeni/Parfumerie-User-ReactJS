import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ApiProvider } from './contexts/apiContext';  
import PrivateRoutes from './Routes/PrivateRoutes';  

function App() {
  return (
    <BrowserRouter>
      {/* <ApiProvider>   */}
          <PrivateRoutes />
      {/* </ApiProvider> */}
    </BrowserRouter>
  );
}

export default App;
