import React, { useState } from 'react';
import Child from './Child';
  
const Parent = () => {
  const [receivedData, setReceivedData] = useState('');

  const handleReceiveData = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child sendDataToParent={handleReceiveData} />
      <p>Data received from child: {receivedData}</p>
    </div>
  );
};

export default Parent;
