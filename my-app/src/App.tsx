import React, { useState, useEffect } from 'react';
import FormUser from './components/FormUser';
import FormTransition from './components/‏‏FormTransition';
import API from '../src/Api';
import './App.css';
// import User from '../src/model/userModel';
import User from 'jbhmanager'

function App() {
  const [showFormUser, setShowFormUser] = useState(false);
  const [showFormTransition, setShowFormTransition] = useState(false);
  const [users, setUsers] = useState<User[]>([]); 


  const handleButtonClickInUser: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowFormUser(!showFormUser);
  };

  const handleButtonClickInTransition: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowFormTransition(!showFormTransition);
  };

  useEffect(() => {
    API.getUserService.getUsers().then(data => {
      console.log("All Users: %j", data);
      setUsers(data);
    });
}, []);


  return (
    <div className="App">
      <button onClick={handleButtonClickInUser}>Add User</button>
      <button onClick={handleButtonClickInTransition}>Add transition</button>
      
      {showFormUser && <FormUser setShowFormUser={setShowFormUser} />}
      {showFormTransition && <FormTransition setShowFormTransition={setShowFormTransition} />}
    </div>
  );
}

export default App;

