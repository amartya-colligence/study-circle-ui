import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getList } from './services';

function App() {
  const [appName, setAppName] = useState("");

  useEffect((): any => {
    let mounted = true;
    getList()
      .then((appName: any) => {
        if (mounted) {
          setAppName(appName);
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="wrapper">
      {appName}
    </div>
  )

}

export default App;
