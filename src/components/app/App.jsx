import React, { useState, useEffect }  from 'react';

export default function App() {
  const [data, setData] = useState('Hello');

  const callAPI = () => {
    fetch('http://localhost:7890/api/v1/health')
      .then((data) => data.text())
      .then((res) => setData(res));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
