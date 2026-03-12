import { useState } from 'react';
import './App.css';
import notificationsData from './notifications';
import NotificationList from './NotificationList';

function App() {
  
  const [notifications, setNotifications] = useState(notificationsData);

  return (
    <div className="App">
      <h1>Notifications</h1>

      <p>{notifications.length} Notifications</p>

      <button onClick={() => setNotifications([])}>Clear All</button>

      <NotificationList 
        notifications={notifications} 
        setNotifications={setNotifications} 
      />
    </div>
  );
}

export default App;