import React, { useState } from 'react'




const App = () =>  {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: "Emeka"});
  }

  const logout = () => {
    setUser(null);
  }
  
  
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
    
}

export default App
