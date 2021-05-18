import React, { useEffect, useState } from "react";

import "./sass/main.scss";
import { Home } from "scenes/Home/Home";
import { Splash } from "scenes/Splash/Splash";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <Splash/>
  }

  return (
    <div className="App" id="app">
      <Home />
    </div>
  );
}

export default App;
