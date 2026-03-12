import Card from './Card.jsx';

function Notification({ notification, notifications, setNotifications }) {
  function clearNotification() {
    setNotifications(notifications.filter(item => item.id !== notification.id));
  }

  return (
    <Card>
      <div className="notification">
        <h3>{notification.name}</h3>
        <p>{notification.message}</p>
        <button onClick={clearNotification}>Clear</button>
      </div>
    </Card>
  );
}

export default Notification;
