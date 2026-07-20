import { Bell } from "lucide-react";

const NotificationButton = ({
  unreadCount,
  onClick,
  isOpen = false,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Open notifications"
      className={`relative rounded-full p-2 transition-all duration-200
        hover:bg-blue-100
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        ${isOpen ? "bg-blue-100" : ""}`}
    >
      <span className="sr-only">Open notifications</span>

      <Bell className="h-6 w-6 text-gray-700" />

      {unreadCount > 0 && (
        <span
          className="
            absolute
            -top-1
            -right-1
            flex
            h-5
            min-w-[20px]
            items-center
            justify-center
            rounded-full
            bg-red-500
            px-1
            text-xs
            font-semibold
            text-white
          "
        >
          {unreadCount}
        </span>
      )}
    </button>
  );
};

export default NotificationButton;