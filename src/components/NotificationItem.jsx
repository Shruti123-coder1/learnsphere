const NotificationItem = ({ notification }) => {
  return (
    <div
      className={`relative rounded-lg p-4 border transition-all duration-200 hover:bg-blue-50 cursor-pointer
      ${
        notification.read
          ? "bg-white border-gray-200"
          : "bg-blue-50 border-blue-200"
      }`}
    >
      {!notification.read && (
        <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-600"></span>
      )}

      <h4 className="font-semibold text-gray-800">
        {notification.title}
      </h4>

      <p className="text-sm text-gray-600 mt-1">
        {notification.message}
      </p>

      <span className="text-xs text-gray-400 mt-2 block">
        {notification.time}
      </span>
    </div>
  );
};

export default NotificationItem;