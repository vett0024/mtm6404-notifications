import Notification from './Notification';

function NotificationList({ notifications, setNotifications }) {
  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <Notification 
          key={notification.id} 
          notification={notification} 
          notifications={notifications} 
          setNotifications={setNotifications} 
        />
      ))}
    </div>
  );
}

export default NotificationList;